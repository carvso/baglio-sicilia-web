import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, MapPin, Clock, Users, Lock, ExternalLink } from 'lucide-react';
import { format, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { it } from 'date-fns/locale';
import { cn } from '@/lib/utils';

// Tipi di eventi con colori
const eventTypes = {
  matrimonio: { color: 'bg-pink-100 text-pink-800 border-pink-200', label: 'Matrimonio' },
  aziendale: { color: 'bg-blue-100 text-blue-800 border-blue-200', label: 'Evento Aziendale' },
  pubblico: { color: 'bg-green-100 text-green-800 border-green-200', label: 'Evento Pubblico' },
  privato: { color: 'bg-gray-100 text-gray-600 border-gray-200', label: 'Evento Privato' }
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
    description: 'Evento aziendale con catering incluso e team building activities.'
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
    description: 'Serata jazz con aperitivo vista tramonto. Prenotazione consigliata.',
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
    description: 'Degustazione vini siciliani con sommelier esperto. Include finger food.',
    bookable: true
  }
];

interface EventCalendarProps {
  className?: string;
  showHeader?: boolean;
  compact?: boolean;
}

export function EventCalendar({ className, showHeader = true, compact = false }: EventCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Filtra eventi per il mese corrente
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthEvents = mockEvents.filter(event => 
    event.date >= monthStart && event.date <= monthEnd
  );

  // Ottieni eventi per una data specifica
  const getEventsForDate = (date: Date) => {
    return mockEvents.filter(event => isSameDay(event.date, date));
  };

  // Ottieni eventi per la data selezionata
  const selectedDateEvents = getEventsForDate(selectedDate);

  // Naviga tra i mesi
  const goToPreviousMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Custom day renderer per mostrare eventi
  const renderDay = (date: Date) => {
    const dayEvents = getEventsForDate(date);
    const hasEvents = dayEvents.length > 0;

    return (
      <div className="relative w-full h-full">
        <span className={cn(
          "text-sm",
          isSameDay(date, selectedDate) && "font-semibold"
        )}>
          {date.getDate()}
        </span>
        {hasEvents && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-0.5">
            {dayEvents.slice(0, 3).map((event, index) => (
              <div
                key={event.id}
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  event.type === 'matrimonio' && "bg-pink-500",
                  event.type === 'aziendale' && "bg-blue-500",
                  event.type === 'pubblico' && "bg-green-500",
                  event.type === 'privato' && "bg-gray-400"
                )}
              />
            ))}
            {dayEvents.length > 3 && (
              <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            )}
          </div>
        )}
      </div>
    );
  };

  const EventCard = ({ event }: { event: typeof mockEvents[0] }) => (
    <Card className="mb-3 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-sm">{event.title}</h4>
              {event.isPrivate && <Lock className="w-3 h-3 text-muted-foreground" />}
            </div>
            <Badge variant="outline" className={cn("text-xs", eventTypes[event.type].color)}>
              {eventTypes[event.type].label}
            </Badge>
          </div>
          {event.thumbnail && (
            <img 
              src={event.thumbnail} 
              alt={event.title}
              className="w-12 h-12 rounded-lg object-cover ml-3"
            />
          )}
        </div>
        
        <div className="space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{event.guests} ospiti</span>
          </div>
        </div>

        {event.description && (
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
            {event.description}
          </p>
        )}

        {event.bookable && !event.isPrivate && (
          <Button size="sm" className="w-full mt-3" variant="outline">
            <ExternalLink className="w-3 h-3 mr-1" />
            Prenota ora
          </Button>
        )}

        {event.isPrivate && (
          <div className="mt-3 p-2 bg-muted/50 rounded text-xs text-center text-muted-foreground">
            Evento Privato - Non Prenotabile
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className={cn("space-y-4", className)}>
      {showHeader && (
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Calendario Eventi</h3>
            <p className="text-sm text-muted-foreground">Scopri i nostri prossimi eventi</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={goToPreviousMonth}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium min-w-[120px] text-center">
              {format(currentMonth, 'MMMM yyyy', { locale: it })}
            </span>
            <Button variant="outline" size="sm" onClick={goToNextMonth}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      <div className={cn(
        "grid gap-4",
        compact ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-3"
      )}>
        {/* Calendario */}
        <div className={cn("lg:col-span-2", compact && "lg:col-span-1")}>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">
                {format(currentMonth, 'MMMM yyyy', { locale: it })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
                month={currentMonth}
                onMonthChange={setCurrentMonth}
                className="w-full pointer-events-auto"
                components={{
                  Day: ({ date }) => (
                    <button className="relative w-full h-10 text-sm rounded-md hover:bg-accent hover:text-accent-foreground">
                      {renderDay(date)}
                    </button>
                  )
                }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Eventi della data selezionata */}
        {!compact && (
          <div>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  {format(selectedDate, 'dd MMMM yyyy', { locale: it })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-3">
                    {selectedDateEvents.map(event => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Nessun evento in questa data</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Legenda colori */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(eventTypes).map(([type, config]) => (
              <div key={type} className="flex items-center gap-2">
                <div className={cn(
                  "w-3 h-3 rounded-full",
                  type === 'matrimonio' && "bg-pink-500",
                  type === 'aziendale' && "bg-blue-500", 
                  type === 'pubblico' && "bg-green-500",
                  type === 'privato' && "bg-gray-400"
                )} />
                <span className="text-xs text-muted-foreground">{config.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lista eventi del mese (per mobile) */}
      {compact && monthEvents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Eventi del mese</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {monthEvents.slice(0, 3).map(event => (
                <EventCard key={event.id} event={event} />
              ))}
              {monthEvents.length > 3 && (
                <div className="text-center pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Vedi tutti gli eventi ({monthEvents.length})
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>
                          Eventi di {format(currentMonth, 'MMMM yyyy', { locale: it })}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {monthEvents.map(event => (
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