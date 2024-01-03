// fuente => https://premiosesland.com/assets/index.b7b13000.js

const info = [
    {
      categoria: 'Streamer del a\xF1o',
      ganador: 'Ibai',
      foto1: 'streamer1',
      comunidad1: 41.05,
      streamers1: 75.6,
      total1: 58.33,
      finalista: 'Auronplay',
      foto2: 'streamer2',
      comunidad2: 32.85,
      streamers2: 8.1,
      total2: 20.48
    },
    {
      categoria: 'Serie de contenido del a\xF1o',
      ganador: 'Tortillaland',
      foto1: 'serie1',
      comunidad1: 39.92,
      streamers1: 27.7,
      total1: 33.81,
      finalista: 'Egoland',
      foto2: 'serie2',
      comunidad2: 26.09,
      streamers2: 40.6,
      total2: 33.35
    },
    {
      categoria: 'Streamer revelaci\xF3n del a\xF1o',
      ganador: 'elXokas',
      foto1: 'revelacion1',
      comunidad1: 27.74,
      streamers1: 54,
      total1: 40.87,
      finalista: 'ElMariana',
      foto2: 'revelacion2',
      comunidad2: 30.38,
      streamers2: 27,
      total2: 28.69
    },
    {
      categoria: 'Evento del a\xF1o',
      ganador: 'La velada del a\xF1o',
      foto1: 'evento1',
      comunidad1: 48.78,
      streamers1: 72.9,
      total1: 60.84,
      finalista: 'Mundial de globos',
      foto2: 'evento2',
      comunidad2: 27.27,
      streamers2: 18.9,
      total2: 23.1
    },
    {
      categoria: 'Mejor trayectoria',
      ganador: 'Fernanfloo',
      foto1: 'trayectoria1',
      comunidad1: 60.25,
      streamers1: 18.9,
      total1: 39.58,
      finalista: 'Knekro',
      foto2: 'trayectoria2',
      comunidad2: 19.68,
      streamers2: 37.8,
      total2: 28.74
    },
    {
      categoria: 'Talk show del a\xF1o',
      ganador: 'The Wild Project',
      foto1: 'talkshow1',
      comunidad1: 43.81,
      streamers1: 45.9,
      total1: 44.86,
      finalista: 'YoInterneto',
      foto2: 'talkshow2',
      comunidad2: 16.05,
      streamers2: 21.6,
      total2: 18.83
    },
    {
      categoria: 'Canci\xF3n del a\xF1o',
      ganador: 'El cuarteto de Ibai',
      foto1: 'cancion1',
      comunidad1: 54.6,
      streamers1: 40.5,
      total1: 47.55,
      finalista: 'Tofu Delivery',
      foto2: 'cancion2',
      comunidad2: 10.41,
      streamers2: 29.7,
      total2: 20.1
    },
    {
      categoria: 'J\xE4gger del a\xF1o',
      ganador: 'J\xE4gger boxeador',
      foto1: 'jagger1',
      comunidad1: 36.09,
      streamers1: 51.3,
      total1: 43.7,
      finalista: 'Profesor J\xE4gger',
      foto2: 'jagger2',
      comunidad2: 34.19,
      streamers2: 24.3,
      total2: 29.25
    },
    {
      categoria: 'Streamer IRL del a\xF1o',
      ganador: 'Kidi',
      foto1: 'irl1',
      comunidad1: 20.81,
      streamers1: 67.5,
      total1: 44.15,
      finalista: 'Momo',
      foto2: 'irl2',
      comunidad2: 51.39,
      streamers2: 16.2,
      total2: 33.79
    },
    {
      categoria: 'Caster del a\xF1o',
      ganador: 'Kaquka',
      foto1: 'caster1',
      comunidad1: 40.48,
      streamers1: 27,
      total1: 33.74,
      finalista: 'Champi',
      foto2: 'caster2',
      comunidad2: 24.41,
      streamers2: 29.7,
      total2: 27.1
    },
    {
      categoria: 'Reportero/a de esports del a\xF1o',
      ganador: 'Cristinini',
      foto1: 'reportero1',
      comunidad1: 66.01,
      streamers1: 35.1,
      total1: 50.56,
      finalista: 'Yuste',
      foto2: 'reportero2',
      comunidad2: 18.79,
      streamers2: 43.2,
      total2: 31
    },
    {
      categoria: 'Jugador/a de esports del a\xF1o',
      ganador: 'Mixwell',
      foto1: 'jugador1',
      comunidad1: 32.92,
      streamers1: 37.8,
      total1: 35.36,
      finalista: 'Elyoya',
      foto2: 'jugador2',
      comunidad2: 26.82,
      streamers2: 37.8,
      total2: 32.31
    },
    {
      categoria: 'Roleplayer del a\xF1o',
      ganador: 'AgenteMaxo',
      foto1: 'roleplayer1',
      comunidad1: 23.14,
      streamers1: 40.5,
      total1: 31.82,
      finalista: 'Cristinini',
      foto2: 'roleplayer2',
      comunidad2: 28.52,
      streamers2: 29.7,
      total2: 29.11
    },
    {
      categoria: 'Baile del a\xF1o',
      ganador: 'Papi Gavi',
      foto1: 'baile1',
      comunidad1: 45.96,
      streamers1: 35.1,
      total1: 40.53,
      finalista: 'Ibai Llanos',
      foto2: 'baile2',
      comunidad2: 25.14,
      streamers2: 54,
      total2: 39.57
    },
    {
      categoria: 'Enfadado/a del a\xF1o',
      ganador: 'Agustin51',
      foto1: 'enfadado1',
      comunidad1: 34.16,
      streamers1: 51.3,
      total1: 42.73,
      finalista: 'ElXocas',
      foto2: 'enfadado2',
      comunidad2: 23.06,
      streamers2: 18.9,
      total2: 20.98
    },
    {
      categoria: 'Fail del a\xF1o',
      ganador: 'Ibai',
      foto1: 'fail1',
      comunidad1: 47.59,
      streamers1: 27,
      total1: 37.29,
      finalista: 'Ampeter',
      foto2: 'fail2',
      comunidad2: 27.73,
      streamers2: 43.2,
      total2: 35.46
    },
    {
      categoria: 'Clip del a\xF1o',
      ganador: 'El Kun',
      foto1: 'clip1',
      comunidad1: 42.61,
      streamers1: 32.4,
      total1: 37.51,
      finalista: 'Esto no es un juego',
      foto2: 'clip2',
      comunidad2: 21.86,
      streamers2: 51.3,
      total2: 36.58
    }
  ],
  mS = [
    {
      categoria: 'Streamer del a\xF1o',
      ganador: 'Ibai',
      foto1: 'streamer1',
      comunidad1: 21,
      streamers1: 56.03,
      total1: 38.52,
      finalista: 'Illojuan',
      foto2: 'streamer2',
      comunidad2: 22,
      streamers2: 22.67,
      total2: 22.34
    },
    {
      categoria: 'Mejor miniserie de contenido',
      ganador: 'Squid Craft Games',
      foto1: 'miniserie1',
      comunidad1: 82,
      streamers1: 96.3,
      total1: 89.15,
      finalista: 'Saw Minecraft Games',
      foto2: 'miniserie2',
      comunidad2: 11,
      streamers2: 0,
      total2: 5.5
    },
    {
      categoria: 'Mejor trayectoria',
      ganador: 'Germ\xE1n Garmendia',
      foto1: 'trayectoria'
    },
    {
      categoria: 'Mejor serie de contenido',
      ganador: 'Dedsafio 2',
      foto1: 'serie1',
      comunidad1: 28,
      streamers1: 40.5,
      total1: 34.25,
      finalista: 'Tortillaland 2',
      foto2: 'serie2',
      comunidad2: 30,
      streamers2: 21,
      total2: 25.5
    },
    {
      categoria: 'Streamer revelaci\xF3n',
      ganador: 'Spreen',
      foto1: 'revelacion1',
      comunidad1: 29,
      streamers1: 50.4,
      total1: 39.7,
      finalista: 'Rivers',
      foto2: 'revelacion2',
      comunidad2: 35,
      streamers2: 35.22,
      total2: 35.11
    },
    {
      categoria: 'VTuber del a\xF1o',
      ganador: 'Zilverk',
      foto1: 'vtuber1',
      comunidad1: 62,
      streamers1: 52.4,
      total1: 57.2,
      finalista: 'NimuVT',
      foto2: 'vtuber2',
      comunidad2: 29,
      streamers2: 43.9,
      total2: 36.45
    },
    {
      categoria: 'Evento del a\xF1o',
      ganador: 'La velada del a\xF1o II',
      foto1: 'evento1',
      comunidad1: 92,
      streamers1: 98.21,
      total1: 95.61,
      finalista: 'El partidazo de youtubers 2',
      foto2: 'evento2',
      comunidad2: 3.6,
      streamers2: 1.79,
      total2: 2.4
    },
    {
      categoria: 'Talk Show del a\xF1o',
      ganador: 'The Wild Project',
      foto1: 'talkshow1',
      comunidad1: 52,
      streamers1: 75,
      total1: 63.5,
      finalista: 'Charlando tranquilamente',
      foto2: 'talkshow2',
      comunidad2: 21,
      streamers2: 15,
      total2: 18
    },
    {
      categoria: 'Canci\xF3n del a\xF1o',
      ganador: 'Solo - Robleis',
      foto1: 'cancion1',
      comunidad1: 34,
      streamers1: 30.28,
      total1: 32.14,
      finalista: 'La trampa es ley - Lit Killah',
      foto2: 'cancion2',
      comunidad2: 29,
      streamers2: 31.04,
      total2: 30.02
    },
    {
      categoria: 'Streamer IRL del a\xF1o',
      ganador: 'Kidi',
      foto1: 'irl1',
      comunidad1: 21,
      streamers1: 46.47,
      total1: 33.74,
      finalista: 'Viviendoenlacalle',
      foto2: 'irl2',
      comunidad2: 26,
      streamers2: 27.64,
      total2: 26.82
    },
    {
      categoria: 'Mejor cobertura informativa',
      ganador: 'Gerard Romero',
      foto1: 'cobertura1',
      comunidad1: 52,
      streamers1: 40.2,
      total1: 46.1,
      finalista: 'Tamayovisi\xF3n',
      foto2: 'cobertura2',
      comunidad2: 15,
      streamers2: 24.55,
      total2: 19.75
    },
    {
      categoria: 'Caster del a\xF1o',
      ganador: 'Vicky Palami',
      foto1: 'caster1',
      comunidad1: 44,
      streamers1: 23.33,
      total1: 33.67,
      finalista: 'Suja',
      foto2: 'caster2',
      comunidad2: 25,
      streamers2: 28.03,
      total2: 26.51
    },
    {
      categoria: 'Jugador de Esports del a\xF1o',
      ganador: 'Jelty',
      foto1: 'esports1',
      comunidad1: 34,
      streamers1: 22.22,
      total1: 28.11,
      finalista: 'Mixwell',
      foto2: 'esports2',
      comunidad2: 21,
      streamers2: 30.55,
      total2: 25.78
    },
    {
      categoria: 'Roleplayer del a\xF1o',
      ganador: 'JuanSGuarnizo',
      foto1: 'roleplayer1',
      comunidad1: 45,
      streamers1: 39.93,
      total1: 42.47,
      finalista: 'Agentemaxo',
      foto2: 'roleplayer2',
      comunidad2: 26,
      streamers2: 29.51,
      total2: 27.76
    },
    {
      categoria: 'Baile del a\xF1o',
      ganador: 'El Woody - Carreraaa',
      foto1: 'baile1',
      comunidad1: 34,
      streamers1: 54.21,
      total1: 44.11,
      finalista: 'Bailando en la velada - Respetacamiones24',
      foto2: 'baile2',
      comunidad2: 18,
      streamers2: 27.65,
      total2: 22.83
    },
    {
      categoria: 'Enfadado del a\xF1o',
      ganador: 'Luzu',
      foto1: 'enfadado1',
      comunidad1: 49,
      streamers1: 60.43,
      total1: 54.72,
      finalista: 'DJMario',
      foto2: 'enfadado2',
      comunidad2: 22,
      streamers2: 27.68,
      total2: 24.84
    },
    {
      categoria: 'Fail del a\xF1o',
      ganador: 'Ah\xED va mi burst - Manute',
      foto1: 'fail1',
      comunidad1: 27,
      streamers1: 39.28,
      total1: 33.14,
      finalista: 'La ca\xEDda - Madre de Karchez',
      foto2: 'fail2',
      comunidad2: 25,
      streamers2: 16.08,
      total2: 20.54
    }
  ]