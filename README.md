# Business Value Wizard

A comprehensive project management and business value tracking application built with Next.js, TypeScript, and modern web technologies.

## Overview

Business Value Wizard helps teams manage projects, track business metrics, and visualize value propositions through an intuitive dashboard interface. The application provides robust project management tools, team collaboration features, and real-time business metrics visualization.

## Key Features

### Project Management
- Interactive Kanban board with drag-and-drop functionality
- Project creation and management
- Task tracking and status updates
- Team member assignment and collaboration

### Business Analytics
- Real-time metrics visualization
- Performance tracking dashboards
- Value proposition management
- Data-driven insights

### Team Collaboration
- Team member profiles and management
- Task assignment and tracking
- Activity monitoring
- Collaborative workspace

### Security
- NextAuth.js authentication
- Role-based access control
- Protected routes and content
- Secure session management

## Tech Stack

### Core
- Next.js 15.1
- React 19
- TypeScript
- TailwindCSS

### UI Components
- Radix UI primitives
- Recharts for data visualization
- Custom shadcn components
- Responsive design system

### State Management
- React Context API
- Custom data layer
- Memory adapter pattern
- Real-time updates

### Testing
- Jest for unit/integration tests
- Cypress for end-to-end testing
- React Testing Library
- Comprehensive test coverage

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd business-val-wizard
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Testing

Run unit and integration tests:
```bash
npm test           # Run all tests
npm run test:watch # Run tests in watch mode
```

Run end-to-end tests:
```bash
npm run cypress    # Open Cypress Test Runner
npm run test:e2e   # Run Cypress tests headlessly
```

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
src/
├── app/           # Next.js app directory
├── components/    # React components
├── lib/          # Utilities and core functionality
│   ├── api/      # API endpoints
│   ├── auth/     # Authentication
│   └── data/     # Data layer
├── hooks/        # Custom React hooks
└── public/       # Static assets
```

## Documentation

Detailed documentation is available in the `docs/` directory:
- [Authentication](docs/auth.md)
- [Dashboard](docs/dashboard.md)
- [Data Layer](docs/datalayer.md)
- [Testing](docs/testing.md)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
