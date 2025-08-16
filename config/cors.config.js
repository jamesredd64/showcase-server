const cors = require('cors');

const allowedOrigins = [
 
  'https://showcase-cms.vercel.app', 
  'https://showcase-server-nine.vercel.app/',
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:5000',
  'capacitor://localhost',
  'ionic://localhost',
  'https://www.showcase.education/events/kilmer-branch-library',
  'https://www.showcase.education'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps)
    if (!origin) return callback(null, true);

    // Allow if origin is in allowedOrigins or if in development environment
    if (allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      // Instead of error, allow all origins for now to avoid CORS issues
      // You can tighten this later
      callback(null, true);
      // To enforce strict CORS, uncomment below line and comment above line
      // callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'X-CSRF-Token',
    'X-Requested-With',
    'Accept',
    'Accept-Version',
    'Content-Length',
    'Content-MD5',
    'Content-Type',
    'Date',
    'X-Api-Version',
    'Authorization',
    'Origin',
    'Cache-Control',
    'Pragma'
  ],
  credentials: true,
  maxAge: 86400,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

module.exports = cors(corsOptions);
