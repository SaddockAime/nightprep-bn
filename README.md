# 🌙 NightPrep Backend API

A comprehensive REST API for the NightPrep evening routine application, built with Node.js, Express, and MongoDB.

## 📋 Features

- **JWT Authentication** - Secure user registration and login
- **Evening Checklist** - CRUD operations for bedtime tasks
- **Bedtime Management** - Set and track bedtime schedules
- **Reminder System** - Configurable evening reminders
- **Phone-Free Timer** - Customizable focus timer settings
- **User Settings** - Centralized preference management

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone and setup**:
   ```bash
   cd nightprep/server
   npm install
   ```

2. **Configure environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   ```

3. **Start the server**:
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

4. **Verify installation**:
   ```bash
   curl http://localhost:5000
   # Should return: "NightPrep API is running..."
   ```

## 📁 Project Structure

```
server/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── checklistController.js # Checklist CRUD operations
│   ├── settingsController.js # Settings management
│   ├── bedtimeController.js  # Bedtime operations
│   ├── reminderController.js # Reminder management
│   └── timerController.js    # Timer settings
├── middleware/
│   └── authMiddleware.js     # JWT token verification
├── models/
│   └── User.js              # User schema with all features
├── routes/
│   ├── auth.js              # Authentication routes
│   ├── checklist.js         # Checklist routes
│   ├── settings.js          # Settings routes
│   ├── bedtime.js           # Bedtime routes
│   ├── reminder.js          # Reminder routes
│   └── timer.js             # Timer routes
├── .env                     # Environment variables
├── index.js                 # Express server setup
└── package.json            # Dependencies and scripts
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info

### Checklist
- `GET /api/checklist` - Get user's checklist
- `POST /api/checklist` - Add checklist item
- `PUT /api/checklist/:id` - Toggle item completion
- `DELETE /api/checklist/:id` - Delete checklist item

### Settings (Central)
- `GET /api/settings` - Get all user settings
- `PUT /api/settings` - Update user settings

### Bedtime
- `GET /api/bedtime` - Get user's bedtime
- `POST /api/bedtime` - Set/update bedtime

### Reminder
- `GET /api/reminder` - Get reminder time
- `POST /api/reminder` - Set/update reminder time

### Timer
- `GET /api/timer-settings` - Get timer duration
- `POST /api/timer-settings` - Update timer duration

## 📖 Documentation

- **[Complete API Documentation](./API_DOCUMENTATION.md)** - Detailed endpoint documentation with examples
- **[Frontend Implementation Guide](./FRONTEND_GUIDE.md)** - React/Vite integration guide
- **[Postman Collection](./NightPrep_API.postman_collection.json)** - Import for API testing

## 🔧 Configuration

### Environment Variables (.env)
```env
# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/nightprep
# OR: mongodb+srv://username:password@cluster.mongodb.net/nightprep

# JWT Secret (use a strong random string)
JWT_SECRET=your_super_secret_jwt_key_here

# Server Port
PORT=5000
```

### Database Schema
The application uses a single User model that includes:
- Basic user info (name, email, password)
- Settings (bedtime, reminderTime, timerDuration)
- Embedded checklist items
- Automatic timestamps (createdAt, updatedAt)

## 🧪 Testing

### Using Postman
1. Import `NightPrep_API.postman_collection.json`
2. Set `baseUrl` variable to `http://localhost:5000/api`
3. Register/login to get JWT token (automatically saved)
4. Test all endpoints with authentication

### Manual Testing
```bash
# Test server status
curl http://localhost:5000

# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Login and get token
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🛡️ Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based auth
- **Route Protection**: Middleware protects all user routes
- **Input Validation**: Basic validation on all endpoints
- **Error Handling**: Proper error responses and logging

## 🔄 Frontend Integration

This API is designed to work with a React/Vite frontend. See the [Frontend Guide](./FRONTEND_GUIDE.md) for:
- Complete React service setup
- Authentication context implementation
- Component structure recommendations
- State management patterns

### Key Integration Points:
- **Token Storage**: Store JWT in localStorage
- **Header Authentication**: Include `x-auth-token` header
- **Error Handling**: Handle 401 responses appropriately
- **Data Formats**: Time strings in "HH:MM" format

## 📦 Dependencies

### Production
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **jsonwebtoken** - JWT implementation
- **bcryptjs** - Password hashing
- **cors** - Cross-origin requests
- **dotenv** - Environment variables

### Development
- **nodemon** - Development server with auto-reload

## 🚀 Deployment

### Heroku Deployment
```bash
# Install Heroku CLI and login
heroku create nightprep-api
heroku config:set MONGO_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
git push heroku main
```

### Environment Setup
1. Set up MongoDB Atlas cluster
2. Configure environment variables
3. Update CORS settings for production domain
4. Set up proper error logging

## 📞 Support

For questions or issues:
1. Check the [API Documentation](./API_DOCUMENTATION.md)
2. Review the [Frontend Guide](./FRONTEND_GUIDE.md)
3. Test endpoints with the Postman collection
4. Verify environment configuration

## 🤝 Contributing

1. Follow the existing code structure
2. Add tests for new features
3. Update documentation
4. Ensure proper error handling

---

**Ready to build the frontend? Check out the [Frontend Implementation Guide](./FRONTEND_GUIDE.md)! 🚀**
