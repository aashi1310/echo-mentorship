# Echo Rise Mentorship Hub - Backend

This is the backend server for Echo Rise Mentorship Hub, built with Node.js, Express, and MongoDB.

## Features

- Session booking API
- Email notifications for session confirmations
- Static Google Meet link integration
- MongoDB database integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)
- Gmail account for sending emails

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   - Copy `.env.example` to `.env`
   - Fill in your environment variables:
     - MongoDB URI
     - Gmail credentials
     - JWT secret
     - Frontend URL

3. Start the server:
   - Development mode: `npm run dev`
   - Production mode: `npm start`

## API Endpoints

### Session Management

#### Book a Session
- **POST** `/api/sessions/book`
- Body:
  ```json
  {
    "mentorName": "string",
    "mentorEmail": "string",
    "menteeName": "string",
    "menteeEmail": "string",
    "topic": "string",
    "date": "Date",
    "time": "string",
    "duration": "number"
  }
  ```

#### Get Mentee's Sessions
- **GET** `/api/sessions/mentee/:menteeName`

#### Get Mentor's Sessions
- **GET** `/api/sessions/mentor/:mentorName`

## Email Integration

The backend uses Nodemailer with Gmail to send session confirmation emails to both mentors and mentees. The emails include:
- Session details (topic, date, time, duration)
- Google Meet link
- Participant information

## Google Meet Integration

All sessions use a static Google Meet link: https://meet.google.com/hek-awzw-dyr

## Error Handling

The API returns appropriate HTTP status codes and error messages in JSON format:
```json
{
  "success": false,
  "message": "Error description"
}
```