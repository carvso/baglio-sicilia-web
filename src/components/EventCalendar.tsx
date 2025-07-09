import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight, MapPin, Clock, Users, Lock, ExternalLink, Heart, Building2, PartyPopper, Eye, Calendar as CalendarIcon, Filter } from 'lucide-react';
import { format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, addDays } from 'date-fns';
import { it } from 'date-fns/locale';
import { cn } from '@/lib/utils';

// Tipi di eventi con colori navy/oro eleganti e icone
const eventTypes = {
  matrimonio: { 
    color: 'bg-gradient-to-r from-rose-50 to-pink-50 text-rose-700 border-rose-200/60', 
    label: 'Matrimonio',
    icon: Heart,
    dotColor: 'bg-rose-400'
  },
  aziendale: { 
    color: 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200/60', 
    label: 'Evento Aziendale',
    icon: Building2,
    dotColor: 'bg-blue-400'
  },
  pubblico: { 
    color: 'bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200/60', 
    label: 'Evento Pubblico',
    icon: PartyPopper,
    dotColor: 'bg-emerald-400'
  },
  privato: { 
    color: 'bg-gradient-to-r from-slate-50 to-gray-50 text-slate-600 border-slate-200/60', 
    label: 'Evento Privato',
    icon: Eye,
    dotColor: 'bg-slate-400'
  }
};

// Eventi fittizi per il mese corrente e prossimo
const mockEvents = [
  {
    id: 1,
    title: 'Matrimonio Elena & Marco',
    date: new Date(2025, 0, 15), // 15 gennaio 2025
    type: 'matrimonio' as keyof typeof eventTypes,
    isPrivate: true,
    time: '15:00',
    guests: 120,
    location: 'Terrazza Panoramica',
    description: 'Celebrazione romantica con vista panoramica sulla costa siciliana.',
    thumbnail: '/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png'
  },
  {
    id: 2,
    title: 'Convention Aziendale Tech Solutions',
    date: new Date(2025, 0, 22), // 22 gennaio 2025
    type: 'aziendale' as keyof typeof eventTypes,
    isPrivate: false,
    time: '09:00',
    guests: 80,
    location: 'Sala Conferenze',
    description: 'Evento aziendale con catering incluso e team building activities in location esclusiva.'
  },
  {
    id: 3,
    title: 'Sunset Jazz Night',
    date: new Date(2025, 0, 25), // 25 gennaio 2025
    type: 'pubblico' as keyof typeof eventTypes,
    isPrivate: false,
    time: '19:30',
    guests: 60,
    location: 'Terrazza Lounge',
    description: 'Serata jazz con aperitivo vista tramonto. Live music e atmosfera magica della Sicilia.',
    bookable: true
  },
  {
    id: 4,
    title: 'Evento Privato',
    date: new Date(2025, 1, 8), // 8 febbraio 2025
    type: 'privato' as keyof typeof eventTypes,
    isPrivate: true,
    time: '20:00',
    guests: 40,
    location: 'Sala Privata'
  },
  {
    id: 5,
    title: 'Matrimonio Sarah & Giuseppe',
    date: new Date(2025, 1, 14), // 14 febbraio 2025 - San Valentino
    type: 'matrimonio' as keyof typeof eventTypes,
    isPrivate: true,
    time: '16:00',
    guests: 150,
    location: 'Giardino & Terrazza',
    description: 'Matrimonio da sogno nel giorno di San Valentino, tra giardini fioriti e terrazze panoramiche.',
    thumbnail: '/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png'
  },
  {
    id: 6,
    title: 'Wine Tasting Experience',
    date: new Date(2025, 1, 20), // 20 febbraio 2025
    type: 'pubblico' as keyof typeof eventTypes,
    isPrivate: false,
    time: '18:00',
    guests: 25,
    location: 'Cantina',
    description: 'Degustazione vini siciliani con sommelier esperto. Include finger food e tour della cantina.',
    bookable: true
  },
  {
    id: 7,
    title: 'Aperyluxury con Spettacolo Burlesque',
    date: new Date(2024, 6, 4), // 4 luglio 2024 (evento passato)
    type: 'pubblico' as keyof typeof eventTypes,
    isPrivate: false,
    time: '20:30',
    guests: 90,
    location: 'Terrazza Lounge',
    description: 'Serata esclusiva con aperitivo di lusso e spettacolo burlesque. Un mix perfetto di eleganza e sensualità siciliana.',
    bookable: false,
    thumbnail: '/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png'
  }
];

interface EventCalendarProps {
  className?: string;
  showHeader?: boolean;
  compact?: boolean;
}

type ViewMode = 'month' | 'week';
type FilterType = 'all' | keyof typeof eventTypes;

export function EventCalendar({ className, showHeader = true, compact = false }: EventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>('month');
  const [filter, setFilter] = useState<FilterType>('all');

  // Filtra eventi per il periodo corrente e per categoria
  const periodStart = viewMode === 'month' ? startOfMonth(currentMonth) : startOfWeek(currentMonth, { weekStartsOn: 1 });
  const periodEnd = viewMode === 'month' ? endOfMonth(currentMonth) : endOfWeek(currentMonth, { weekStartsOn: 1 });
  
  const filteredEvents = mockEvents.filter(event => {
    const inPeriod = event.date >= periodStart && event.date <= periodEnd;
    const matchesFilter = filter === 'all' || event.type === filter;
    return inPeriod && matchesFilter;
  });

  // Ottieni eventi per una data specifica
  const getEventsForDate = (date: Date) => {
    return mockEvents.filter(event => isSameDay(event.date, date));
  };

  // Ottieni eventi per la data selezionata
  const selectedDateEvents = getEventsForDate(selectedDate);


  // Navigazione periodo
  const goToPreviousPeriod = () => {
    if (viewMode === 'month') {
      setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    } else {
      setCurrentMonth(prev => new Date(prev.getTime() - 7 * 24 * 60 * 60 * 1000));
    }
  };

  const goToNextPeriod = () => {
    if (viewMode === 'month') {
      setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    } else {
      setCurrentMonth(prev => new Date(prev.getTime() + 7 * 24 * 60 * 60 * 1000));
    }
  };

  // Custom day renderer elegante con bordi oro
  const renderDay = (date: Date) => {
    const dayEvents = getEventsForDate(date).filter(event => filter === 'all' || event.type === filter);
    const hasEvents = dayEvents.length > 0;
    const isToday = isSameDay(date, new Date());
    const isSelected = isSameDay(date, selectedDate);

    return (
      <div className={cn(
        "relative w-full h-12 flex flex-col items-center justify-center rounded-lg transition-all duration-200",
        "hover:bg-gradient-to-br hover:from-baglio-gold/10 hover:to-baglio-gold/5 hover:shadow-sm",
        isSelected && "bg-gradient-to-br from-baglio-navy/10 to-baglio-navy/5 border border-baglio-gold/30 shadow-md",
        isToday && !isSelected && "bg-baglio-gold/10 border border-baglio-gold/50"
      )}>
        <span className={cn(
          "text-sm font-medium transition-colors",
          isSelected && "text-baglio-navy font-semibold",
          isToday && !isSelected && "text-baglio-gold font-semibold"
        )}>
          {date.getDate()}
        </span>
        {hasEvents && (
          <div className="absolute bottom-1 flex gap-0.5">
            {dayEvents.slice(0, 3).map((event) => {
              const IconComponent = eventTypes[event.type].icon;
              return (
                <div
                  key={event.id}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full shadow-sm border border-white/50",
                    eventTypes[event.type].dotColor
                  )}
                />
              );
            })}
            {dayEvents.length > 3 && (
              <div className="w-1.5 h-1.5 rounded-full bg-baglio-gold border border-white/50 shadow-sm" />
            )}
          </div>
        )}
      </div>
    );
  };

  // Renderizza vista settimanale
  const renderWeekView = () => {
    const weekStart = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
    
    return (
      <div className="bg-gradient-to-br from-white to-slate-50/30 rounded-xl border border-baglio-gold/20 shadow-lg overflow-hidden">
        <div className="grid grid-cols-7 border-b border-baglio-gold/20">
          {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map((day) => (
            <div key={day} className="p-3 text-center text-sm font-medium text-baglio-navy bg-gradient-to-r from-baglio-gold/5 to-baglio-gold/10">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((day) => {
            const dayEvents = getEventsForDate(day).filter(event => filter === 'all' || event.type === filter);
            return (
              <div 
                key={day.toISOString()} 
                className="min-h-[120px] p-2 border-r border-baglio-gold/10 last:border-r-0 cursor-pointer hover:bg-baglio-gold/5 transition-colors"
                onClick={() => setSelectedDate(day)}
              >
                <div className={cn(
                  "text-sm font-medium mb-2 text-center",
                  isSameDay(day, new Date()) && "text-baglio-gold font-semibold",
                  isSameDay(day, selectedDate) && "text-baglio-navy font-bold"
                )}>
                  {day.getDate()}
                </div>
                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map((event) => {
                    const IconComponent = eventTypes[event.type].icon;
                    return (
                      <div 
                        key={event.id}
                        className={cn(
                          "text-xs p-1.5 rounded-md border shadow-sm transition-all hover:shadow-md",
                          eventTypes[event.type].color
                        )}
                      >
                        <div className="flex items-center gap-1">
                          <IconComponent className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate font-medium">{event.title}</span>
                        </div>
                        <div className="text-xs opacity-75 mt-0.5">{event.time}</div>
                      </div>
                    );
                  })}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-baglio-navy/60 font-medium text-center">
                      +{dayEvents.length - 2} altri
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const EventCard = ({ event }: { event: typeof mockEvents[0] }) => {
    const IconComponent = eventTypes[event.type].icon;
    
    return (
      <Card className="group overflow-hidden border-baglio-gold/20 shadow-sm hover:shadow-xl hover:border-baglio-gold/40 transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-0">
          {/* Header con thumbnail */}
          <div className="relative">
            {event.thumbnail && (
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={event.thumbnail} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-baglio-navy/20 to-transparent" />
              </div>
            )}
            
            {/* Badge categoria con icona */}
            <div className="absolute top-3 left-3">
              <Badge className={cn(
                "text-xs font-medium shadow-md border-white/20 backdrop-blur-sm",
                eventTypes[event.type].color
              )}>
                <IconComponent className="w-3 h-3 mr-1" />
                {eventTypes[event.type].label}
              </Badge>
            </div>

            {event.isPrivate && (
              <div className="absolute top-3 right-3">
                <div className="bg-slate-800/80 text-white p-1.5 rounded-full backdrop-blur-sm">
                  <Lock className="w-3 h-3" />
                </div>
              </div>
            )}
          </div>

          {/* Contenuto */}
          <div className="p-5">
            <div className="mb-4">
              <h3 className="font-serif text-xl text-baglio-navy font-bold leading-tight mb-2 tracking-wide">
                {event.title}
              </h3>
              <div className="flex items-center gap-2 text-baglio-navy/70">
                <CalendarIcon className="w-4 h-4 text-baglio-gold flex-shrink-0" />
                <p className="text-sm font-medium">
                  {format(event.date, 'EEEE dd MMMM yyyy', { locale: it })}
                </p>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-baglio-navy/70">
                <div className="w-8 h-8 rounded-full bg-baglio-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-baglio-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-baglio-navy">Orario</p>
                  <p className="text-sm text-baglio-navy/60">{event.time}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-baglio-navy/70">
                <div className="w-8 h-8 rounded-full bg-baglio-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-baglio-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-baglio-navy">Location</p>
                  <p className="text-sm text-baglio-navy/60">{event.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-baglio-navy/70">
                <div className="w-8 h-8 rounded-full bg-baglio-gold/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-baglio-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-baglio-navy">Ospiti</p>
                  <p className="text-sm text-baglio-navy/60">{event.guests} persone</p>
                </div>
              </div>
            </div>

            {event.description && (
              <div className="mb-5">
                <h4 className="text-sm font-semibold text-baglio-navy mb-2">Descrizione</h4>
                <p className="text-sm text-baglio-navy/70 font-sans leading-relaxed">
                  {event.description}
                </p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-3">
              {event.bookable && !event.isPrivate && (
                <Button 
                  className="w-full bg-baglio-gold text-baglio-navy hover:bg-baglio-gold/90 font-semibold shadow-md hover:shadow-lg transition-all duration-200 h-11"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Prenota ora
                </Button>
              )}
              
              {!event.isPrivate && (
                <Button 
                  variant="outline" 
                  className="w-full border-baglio-navy/20 text-baglio-navy hover:bg-baglio-navy/5 hover:border-baglio-navy/40 h-11"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Scopri di più
                </Button>
              )}

              {event.isPrivate && (
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 border border-slate-200/60 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Lock className="w-4 h-4" />
                    <span className="text-sm font-medium">Evento Privato</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Non disponibile per prenotazioni</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={cn("space-y-6", className)}>
      {showHeader && (
        <div className="text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl lg:text-5xl font-serif text-baglio-navy font-bold mb-3 tracking-wide">
                  Calendario Eventi
                </h1>
                <p className="text-lg text-baglio-navy/80 font-sans leading-relaxed max-w-3xl">
                  <span className="font-medium">Scopri la magia di Baglio Abbate</span> attraverso i nostri eventi esclusivi 
                  immersi nella bellezza autentica della Sicilia. Dalla celebrazione romantica dei matrimoni 
                  agli eventi aziendali di prestigio internazionale.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-baglio-gold/20 text-baglio-navy border border-baglio-gold/30">
                  📍 Sicilia Autentica
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-baglio-navy/10 text-baglio-navy border border-baglio-navy/20">
                  ✨ Location Esclusiva
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
                  💕 Eventi da Sogno
                </span>
              </div>
            </div>
            
            {/* Controlli di navigazione e visualizzazione */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Filtri categoria */}
              <Select value={filter} onValueChange={(value) => setFilter(value as FilterType)}>
                <SelectTrigger className="w-48 border-baglio-gold/30 bg-white/80 backdrop-blur-sm">
                  <Filter className="w-4 h-4 mr-2 text-baglio-gold" />
                  <SelectValue placeholder="Filtra eventi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tutti gli eventi</SelectItem>
                  {Object.entries(eventTypes).map(([type, config]) => {
                    const IconComponent = config.icon;
                    return (
                      <SelectItem key={type} value={type}>
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4" />
                          {config.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>

              {/* Toggle vista mensile/settimanale */}
              <div className="flex bg-baglio-gold/10 rounded-lg p-1 border border-baglio-gold/30">
                <Button
                  variant={viewMode === 'month' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('month')}
                  className={cn(
                    "px-4 font-medium transition-all",
                    viewMode === 'month' 
                      ? "bg-baglio-gold text-baglio-navy shadow-sm" 
                      : "text-baglio-navy/70 hover:text-baglio-navy hover:bg-baglio-gold/20"
                  )}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Mese
                </Button>
                <Button
                  variant={viewMode === 'week' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('week')}
                  className={cn(
                    "px-4 font-medium transition-all",
                    viewMode === 'week' 
                      ? "bg-baglio-gold text-baglio-navy shadow-sm" 
                      : "text-baglio-navy/70 hover:text-baglio-navy hover:bg-baglio-gold/20"
                  )}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Settimana
                </Button>
              </div>

              {/* Navigazione periodo */}
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={goToPreviousPeriod}
                  className="border-baglio-gold/30 text-baglio-navy hover:bg-baglio-gold/10 hover:border-baglio-gold/50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <div className="min-w-[140px] text-center">
                  <span className="text-sm font-serif font-semibold text-baglio-navy">
                    {viewMode === 'month' 
                      ? format(currentMonth, 'MMMM yyyy', { locale: it })
                      : `${format(startOfWeek(currentMonth, { weekStartsOn: 1 }), 'dd MMM', { locale: it })} - ${format(endOfWeek(currentMonth, { weekStartsOn: 1 }), 'dd MMM yyyy', { locale: it })}`
                    }
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={goToNextPeriod}
                  className="border-baglio-gold/30 text-baglio-navy hover:bg-baglio-gold/10 hover:border-baglio-gold/50"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={cn(
        "grid gap-6",
        compact ? "grid-cols-1" : "grid-cols-1 xl:grid-cols-3"
      )}>
        {/* Vista Calendario */}
        <div className={cn("xl:col-span-2", compact && "xl:col-span-1")}>
          {viewMode === 'week' ? renderWeekView() : (
            <Card className="overflow-hidden border-baglio-gold/20 shadow-lg bg-gradient-to-br from-white to-slate-50/30">
              <CardHeader className="bg-gradient-to-r from-baglio-navy/5 to-baglio-gold/5 border-b border-baglio-gold/20 pb-4">
                <CardTitle className="text-xl font-serif text-baglio-navy">
                  {format(currentMonth, 'MMMM yyyy', { locale: it })}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  month={currentMonth}
                  onMonthChange={setCurrentMonth}
                  className="w-full pointer-events-auto"
                  classNames={{
                    day: "relative h-12 w-12 p-0 font-normal aria-selected:opacity-100 hover:bg-baglio-gold/10 hover:text-baglio-navy transition-colors rounded-lg",
                    day_selected: "bg-baglio-navy text-white hover:bg-baglio-navy/90 hover:text-white",
                    day_today: "bg-baglio-gold/20 text-baglio-navy font-semibold",
                    day_outside: "text-baglio-navy/30 opacity-50",
                  }}
                  components={{
                    Day: ({ date }) => (
                      <button className="relative w-full h-12 text-sm rounded-lg transition-colors hover:bg-baglio-gold/10">
                        {renderDay(date)}
                      </button>
                    )
                  }}
                />
              </CardContent>
            </Card>
          )}
        </div>

        {/* Eventi della data selezionata o filtrati */}
        {!compact && (
          <div className="space-y-4">
            <Card className="border-baglio-gold/20 shadow-lg bg-gradient-to-br from-white to-slate-50/30">
              <CardHeader className="bg-gradient-to-r from-baglio-navy/5 to-baglio-gold/5 border-b border-baglio-gold/20 pb-4">
                <CardTitle className="text-xl font-serif text-baglio-navy flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-baglio-gold/20 flex items-center justify-center">
                    <CalendarIcon className="w-5 h-5 text-baglio-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Eventi del Giorno</h3>
                    <p className="text-sm font-normal text-baglio-navy/60 mt-1">
                      {format(selectedDate, 'EEEE dd MMMM yyyy', { locale: it })}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-6">
                    {selectedDateEvents.filter(event => filter === 'all' || event.type === filter).map(event => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-baglio-gold/10 flex items-center justify-center">
                      <CalendarIcon className="w-10 h-10 text-baglio-gold/60" />
                    </div>
                    <h4 className="font-serif text-xl text-baglio-navy mb-3">Nessun evento programmato</h4>
                    <p className="text-baglio-navy/60 font-sans max-w-sm mx-auto leading-relaxed">
                      Non ci sono eventi in programma per questa data. Esplora altre date per scoprire 
                      i nostri eventi esclusivi.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Legenda elegante */}
      <Card className="border-baglio-gold/20 shadow-md bg-gradient-to-r from-white to-baglio-gold/5">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl text-baglio-navy font-bold mb-2">Tipologie Eventi</h3>
            <p className="text-baglio-navy/60 font-sans">Esplora le diverse categorie dei nostri eventi esclusivi</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(eventTypes).map(([type, config]) => {
              const IconComponent = config.icon;
              return (
                <div 
                  key={type} 
                  className="flex flex-col items-center gap-3 group cursor-pointer p-4 rounded-xl hover:bg-baglio-gold/10 transition-all duration-200" 
                  onClick={() => setFilter(type as FilterType)}
                >
                  <div className="relative">
                    <div className={cn(
                      "w-6 h-6 rounded-full shadow-sm border-2 border-white transition-transform group-hover:scale-110",
                      config.dotColor
                    )} />
                    <IconComponent className="w-5 h-5 text-white absolute inset-0.5" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-baglio-navy group-hover:text-baglio-navy/80 transition-colors">
                      {config.label}
                    </h4>
                    <p className="text-xs text-baglio-navy/50 mt-1">Clicca per filtrare</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Lista eventi per mobile/compact */}
      {compact && filteredEvents.length > 0 && (
        <Card className="border-baglio-gold/20 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-baglio-navy/5 to-baglio-gold/5 border-b border-baglio-gold/20 pb-4">
            <CardTitle className="text-xl font-serif text-baglio-navy">
              <span className="font-bold">Eventi di {format(currentMonth, 'MMMM yyyy', { locale: it })}</span>
              <p className="text-sm font-normal text-baglio-navy/60 mt-1">
                Esplora tutti gli eventi del mese
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {filteredEvents.slice(0, 3).map(event => (
                <EventCard key={event.id} event={event} />
              ))}
              {filteredEvents.length > 3 && (
                <div className="text-center pt-6 border-t border-baglio-gold/20">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="border-baglio-gold/30 text-baglio-navy hover:bg-baglio-gold/10 px-6 h-11"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Vedi tutti gli eventi ({filteredEvents.length})
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-baglio-navy">
                          Eventi di {format(currentMonth, 'MMMM yyyy', { locale: it })}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {filteredEvents.map(event => (
                          <EventCard key={event.id} event={event} />
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}