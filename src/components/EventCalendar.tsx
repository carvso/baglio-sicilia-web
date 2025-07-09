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

// Eventi fittizi per luglio e agosto 2025
const mockEvents = [
  // LUGLIO 2025
  {
    id: 1,
    title: 'Matrimonio Elena & Marco',
    date: new Date(2025, 6, 5), // 5 luglio 2025
    type: 'matrimonio' as keyof typeof eventTypes,
    isPrivate: true,
    time: '17:00',
    guests: 120,
    location: 'Terrazza Panoramica',
    description: 'Celebrazione romantica con vista panoramica sulla costa siciliana al tramonto estivo.',
    thumbnail: '/lovable-uploads/47aec7fc-7c64-4fac-b4eb-63d4913afc3a.png'
  },
  {
    id: 2,
    title: 'Summer Corporate Retreat',
    date: new Date(2025, 6, 10), // 10 luglio 2025
    type: 'aziendale' as keyof typeof eventTypes,
    isPrivate: false,
    time: '09:00',
    guests: 80,
    location: 'Sala Conferenze & Terrazza',
    description: 'Retreat aziendale estivo con team building, workshop e cena sotto le stelle siciliane.'
  },
  {
    id: 3,
    title: 'Notte di Mezza Estate - Jazz & Aperitivo',
    date: new Date(2025, 6, 15), // 15 luglio 2025
    type: 'pubblico' as keyof typeof eventTypes,
    isPrivate: false,
    time: '20:00',
    guests: 60,
    location: 'Terrazza Lounge',
    description: 'Serata magica con live jazz, aperitivo gourmet e vista stelle. Atmosfera incantevole della Sicilia estiva.',
    bookable: true
  },
  {
    id: 4,
    title: 'Festa Privata di Compleanno',
    date: new Date(2025, 6, 18), // 18 luglio 2025
    type: 'privato' as keyof typeof eventTypes,
    isPrivate: true,
    time: '19:30',
    guests: 40,
    location: 'Giardino Privato',
    description: 'Celebrazione esclusiva nel giardino con catering personalizzato.'
  },
  {
    id: 5,
    title: 'Matrimonio Sarah & Giuseppe',
    date: new Date(2025, 6, 22), // 22 luglio 2025
    type: 'matrimonio' as keyof typeof eventTypes,
    isPrivate: true,
    time: '18:00',
    guests: 150,
    location: 'Giardino & Terrazza',
    description: 'Matrimonio da sogno in piena estate siciliana, tra giardini fioriti e terrazze panoramiche.',
    thumbnail: '/lovable-uploads/75cf2578-451c-46db-8c39-c3dcc02f7157.png'
  },
  {
    id: 6,
    title: 'Degustazione Vini Estiva sotto le Stelle',
    date: new Date(2025, 6, 26), // 26 luglio 2025
    type: 'pubblico' as keyof typeof eventTypes,
    isPrivate: false,
    time: '20:30',
    guests: 30,
    location: 'Terrazza Panoramica',
    description: 'Degustazione vini siciliani con sommelier sotto il cielo stellato. Include cena leggera siciliana.',
    bookable: true
  },
  {
    id: 7,
    title: 'Convention Internazionale Tech',
    date: new Date(2025, 6, 28), // 28 luglio 2025
    type: 'aziendale' as keyof typeof eventTypes,
    isPrivate: false,
    time: '08:30',
    guests: 100,
    location: 'Sala Conferenze',
    description: 'Evento tecnologico internazionale con networking dinner e vista mare.'
  },
  
  // AGOSTO 2025
  {
    id: 8,
    title: 'Ferragosto Luxury Night',
    date: new Date(2025, 7, 15), // 15 agosto 2025 - Ferragosto
    type: 'pubblico' as keyof typeof eventTypes,
    isPrivate: false,
    time: '21:00',
    guests: 80,
    location: 'Terrazza Lounge',
    description: 'Celebrazione esclusiva di Ferragosto con DJ set, cocktail gourmet e spettacolo pirotecnico.',
    bookable: true,
    thumbnail: '/lovable-uploads/82698643-0369-4ee1-9b14-cf38c7d570df.png'
  },
  {
    id: 9,
    title: 'Matrimonio Lucia & Andrea',
    date: new Date(2025, 7, 9), // 9 agosto 2025
    type: 'matrimonio' as keyof typeof eventTypes,
    isPrivate: true,
    time: '17:30',
    guests: 100,
    location: 'Giardino Panoramico',
    description: 'Cerimonia intima nel giardino panoramico con vista mozzafiato sulla costa siciliana.',
    thumbnail: '/lovable-uploads/97ade15d-9a2b-4fa8-89b8-847a2ea33c4c.png'
  },
  {
    id: 10,
    title: 'Summer Business Summit',
    date: new Date(2025, 7, 3), // 3 agosto 2025
    type: 'aziendale' as keyof typeof eventTypes,
    isPrivate: false,
    time: '09:00',
    guests: 60,
    location: 'Sala Meeting',
    description: 'Summit aziendale estivo con sessioni di brainstorming e lunch vista mare.'
  },
  {
    id: 11,
    title: 'Notte delle Stelle Cadenti',
    date: new Date(2025, 7, 12), // 12 agosto 2025 - San Lorenzo
    type: 'pubblico' as keyof typeof eventTypes,
    isPrivate: false,
    time: '22:00',
    guests: 50,
    location: 'Terrazza Panoramica',
    description: 'Serata magica per osservare le stelle cadenti con aperitivo astronomico e telescopi.',
    bookable: true
  },
  {
    id: 12,
    title: 'Evento Privato Famiglia',
    date: new Date(2025, 7, 20), // 20 agosto 2025
    type: 'privato' as keyof typeof eventTypes,
    isPrivate: true,
    time: '19:00',
    guests: 35,
    location: 'Sala Privata',
    description: 'Riunione familiare esclusiva con catering tradizionale siciliano.'
  },
  {
    id: 13,
    title: 'Matrimonio Marco & Valentina',
    date: new Date(2025, 7, 23), // 23 agosto 2025
    type: 'matrimonio' as keyof typeof eventTypes,
    isPrivate: true,
    time: '18:30',
    guests: 130,
    location: 'Terrazza & Giardino',
    description: 'Matrimonio elegante con cerimonia in terrazza e ricevimento nel giardino illuminato.',
    thumbnail: '/lovable-uploads/a64af1b5-6d30-4760-80df-66af10202399.png'
  },
  {
    id: 14,
    title: 'Wine & Dine Experience',
    date: new Date(2025, 7, 30), // 30 agosto 2025
    type: 'pubblico' as keyof typeof eventTypes,
    isPrivate: false,
    time: '19:30',
    guests: 40,
    location: 'Ristorante & Cantina',
    description: 'Esperienza culinaria con degustazione vini siciliani e menu dello chef.',
    bookable: true
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

  // Custom day renderer elegante con bordi oro e colori di sfondo
  const renderDay = (date: Date) => {
    const dayEvents = getEventsForDate(date).filter(event => filter === 'all' || event.type === filter);
    const hasEvents = dayEvents.length > 0;
    const isToday = isSameDay(date, new Date());
    const isSelected = isSameDay(date, selectedDate);
    
    // Determina il colore di sfondo principale basato sul primo evento
    const primaryEventType = dayEvents.length > 0 ? dayEvents[0].type : null;
    
    return (
      <div className={cn(
        "relative w-full h-12 flex flex-col items-center justify-center rounded-lg transition-all duration-200",
        "hover:shadow-sm border border-transparent",
        
        // Colori di sfondo per eventi
        hasEvents && primaryEventType === 'matrimonio' && "bg-gradient-to-br from-rose-50 to-pink-100 border-rose-200/50 hover:from-rose-100 hover:to-pink-150",
        hasEvents && primaryEventType === 'aziendale' && "bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200/50 hover:from-blue-100 hover:to-indigo-150",
        hasEvents && primaryEventType === 'pubblico' && "bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200/50 hover:from-emerald-100 hover:to-green-150",
        hasEvents && primaryEventType === 'privato' && "bg-gradient-to-br from-slate-50 to-gray-100 border-slate-200/50 hover:from-slate-100 hover:to-gray-150",
        
        // Hover per giorni senza eventi
        !hasEvents && "hover:bg-gradient-to-br hover:from-baglio-gold/10 hover:to-baglio-gold/5 hover:border-baglio-gold/30",
        
        // Stile per giorno selezionato
        isSelected && hasEvents && "ring-2 ring-baglio-gold/50 ring-offset-1 shadow-md",
        isSelected && !hasEvents && "bg-gradient-to-br from-baglio-navy/10 to-baglio-navy/5 border-baglio-gold/30 shadow-md",
        
        // Stile per oggi
        isToday && !isSelected && !hasEvents && "bg-baglio-gold/10 border-baglio-gold/50",
        isToday && !isSelected && hasEvents && "ring-1 ring-baglio-gold/40"
      )}>
        <span className={cn(
          "text-sm font-medium transition-colors relative z-10",
          isSelected && "text-baglio-navy font-semibold",
          isToday && !isSelected && "text-baglio-gold font-semibold",
          hasEvents && !isSelected && !isToday && "text-baglio-navy/90 font-semibold"
        )}>
          {date.getDate()}
        </span>
        
        {hasEvents && (
          <div className="absolute bottom-1 flex gap-0.5">
            {dayEvents.slice(0, 3).map((event) => {
              return (
                <div
                  key={event.id}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full shadow-sm border border-white/70",
                    eventTypes[event.type].dotColor,
                    "opacity-80"
                  )}
                />
              );
            })}
            {dayEvents.length > 3 && (
              <div className="w-1.5 h-1.5 rounded-full bg-baglio-gold border border-white/70 shadow-sm opacity-80" />
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
    <div className={cn("space-y-6 bg-baglio-navy", className)}>
      {showHeader && (
        <div className="text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-4">
              <div>
                <h1 className="text-4xl lg:text-5xl font-serif text-white font-bold mb-3 tracking-wide">
                  Calendario Eventi
                </h1>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-baglio-gold/20 text-white border border-baglio-gold/30">
                  📍 Sicilia Autentica
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                  ✨ Location Esclusiva
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-500/20 text-rose-200 border border-rose-400/30">
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
              <CardHeader className="bg-gradient-to-r from-baglio-navy/5 to-baglio-gold/5 border-b border-baglio-gold/20 pb-3">
                <CardTitle className="text-lg font-serif text-baglio-navy flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-baglio-gold" />
                  {format(selectedDate, 'dd MMMM yyyy', { locale: it })}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDateEvents.filter(event => filter === 'all' || event.type === filter).map(event => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-baglio-gold/10 flex items-center justify-center">
                      <CalendarIcon className="w-8 h-8 text-baglio-gold/60" />
                    </div>
                    <h4 className="font-serif text-baglio-navy mb-2">Nessun evento</h4>
                    <p className="text-sm text-baglio-navy/60 font-sans">
                      Non ci sono eventi in questa data
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Legenda colori */}
      <Card className="border-baglio-gold/20 shadow-md bg-gradient-to-r from-white to-baglio-gold/5">
        <CardContent className="p-4">
          <h4 className="font-serif text-baglio-navy font-semibold mb-4 text-center">Tipologie Eventi</h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(eventTypes).map(([type, config]) => {
              const IconComponent = config.icon;
              return (
                <div key={type} className="flex items-center gap-2 group cursor-pointer" onClick={() => setFilter(type as FilterType)}>
                  <div className={cn(
                    "w-3 h-3 rounded-full shadow-sm border border-white/50 transition-transform group-hover:scale-110",
                    config.dotColor
                  )} />
                  <IconComponent className="w-4 h-4 text-baglio-gold" />
                  <span className="text-sm font-medium text-baglio-navy group-hover:text-baglio-navy/80 transition-colors">
                    {config.label}
                  </span>
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
