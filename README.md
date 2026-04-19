# Task Manager API

A modern REST API and web UI for managing tasks, built with Node.js, Express.js, and Supabase. Create, read, update, and delete tasks with a real-time database backend.

<br>

## Features
- ✅ Create tasks with titles
- ✅ View all tasks in real-time
- ✅ Update task titles and completion status
- ✅ Delete tasks
- ✅ Modern, responsive UI with inline editing
- ✅ Error handling and validation
- ✅ Real-time Supabase database sync
- ✅ Row-level security with public access policies

<br>

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Environment**: dotenv for configuration
- **Dev Tools**: Nodemon

<br>

## Project Structure
```
src/
├── app.js                 # Express app setup
├── config/
│   └── supabase.js       # Supabase client initialization
├── controllers/
│   └── taskController.js # Request handlers
├── middleware/
│   ├── errorHandler.js   # Error handling (placeholder)
│   └── logger.js         # Logging (placeholder)
├── models/
│   └── taskModel.js      # Task class definition
├── routes/
│   └── taskRoutes.js     # API routes
└── services/
    └── taskService.js    # Business logic & database calls
public/
└── index.html            # Frontend UI
.env                       # Environment variables (not committed)
package.json              # Dependencies
```

<br>

## Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/riaanHarwood/Task-manager-API.git
cd Task-manager-API
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root:
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
PORT=3000
```

4. Set up Supabase:
   - Create a new table called `tasks` with columns:
     - `id` (bigint, primary key, auto-increment)
     - `title` (text, not null)
     - `completed` (boolean, default false)
   - Enable Row Level Security on the `tasks` table
   - Create these policies in the SQL Editor:
     ```sql
     CREATE POLICY "Public read tasks" ON public.tasks FOR SELECT USING (true);
     CREATE POLICY "Public insert tasks" ON public.tasks FOR INSERT WITH CHECK (true);
     CREATE POLICY "Public update tasks" ON public.tasks FOR UPDATE USING (true) WITH CHECK (true);
     CREATE POLICY "Public delete tasks" ON public.tasks FOR DELETE USING (true);
     ```

5. Start the development server:
```bash
npm run dev
```

6. Open http://localhost:3000 in your browser

<br>

## API Endpoints

| Method | Endpoint      | Description           |
|--------|---------------|-----------------------|
| POST   | `/api/tasks`  | Create a new task     |
| GET    | `/api/tasks`  | Get all tasks         |
| PUT    | `/api/tasks/:id` | Update a task      |
| DELETE | `/api/tasks/:id` | Delete a task      |

### Example Requests

**Create a task:**
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' \
  -d '{"title":"Buy groceries"}'
```

**Get all tasks:**
```bash
curl http://localhost:3000/api/tasks
```

**Update a task:**
```bash
curl -X PUT http://localhost:3000/api/tasks/1 \
  -H 'Content-Type: application/json' \
  -d '{"title":"Buy milk","completed":true}'
```

**Delete a task:**
```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

<br>

## DEMO

### API Testing
API testing in Postman - GET method retrieves all tasks from the Supabase database.

<img width="1481" height="870" alt="Postman API Testing" src="https://github.com/user-attachments/assets/35081b0f-b67b-4896-aeea-fc81ee29f0fe" />

<br>

### Web UI
Modern, responsive UI for adding, updating, and deleting tasks. Changes sync live with the database.

<img width="1743" height="863" alt="Task Manager UI" src="https://github.com/user-attachments/assets/29c0614a-b8af-4cef-bd3e-632fb8fc5c0a" />

<br>

### Supabase Dashboard
Table editor showing tasks stored in the Supabase PostgreSQL database.

<img width="1211" height="508" alt="Supabase Table Editor" src="https://github.com/user-attachments/assets/3eab7a83-a4b1-450c-8b44-ab803a4ce98b" />

<br>

## Scripts

```bash
npm run dev      # Start development server with Nodemon
npm start        # Start production server
npm test         # Run tests (not yet implemented)
```

<br>

## Future Enhancements
- [ ] User authentication
- [ ] Task categories/tags
- [ ] Task priorities
- [ ] Due dates
- [ ] Unit and integration tests
- [ ] API documentation with Swagger
- [ ] Docker containerization

<br>

## License
ISC

<br>

## Author
riaanHarwood
# Task-manager-API
A simple REST API built with Node.js and Express.js to manage tasks using a CRUD framework (create, read, update, delete)


<br>

## Features
- Create tasks
- Get all tasks
- Update tasks
- Delete tasks

<br>

## Tech Stack
- Node.js
- Express

<br>

## Run Locally
```bash
npm install
npm run dev
```


## DEMO

API testing in Postman - GET method is used to retrieve all the instances store in the Supabase db. 

<img width="1481" height="870" alt="Screenshot 2026-04-19 at 7 46 06 PM" src="https://github.com/user-attachments/assets/35081b0f-b67b-4896-aeea-fc81ee29f0fe" />

<br>

A simple UI for users to add, update or delete a task. This is sync'd live with the database
<img width="1743" height="863" alt="Screenshot 2026-04-19 at 7 47 30 PM" src="https://github.com/user-attachments/assets/29c0614a-b8af-4cef-bd3e-632fb8fc5c0a" />

<br>
The table editor in Supabase
<img width="1211" height="508" alt="Screenshot 2026-04-19 at 7 48 29 PM" src="https://github.com/user-attachments/assets/3eab7a83-a4b1-450c-8b44-ab803a4ce98b" />



