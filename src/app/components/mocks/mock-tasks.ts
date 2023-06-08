import { Task } from '../interfaces/Task';

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors appointment',
    day: 'May 5th at 8:00 PM',
    reminder: true,
  },
  {
    id: 2,
    text: 'Grocery shopping',
    day: 'June 10th at 10:00 AM',
    reminder: true,
  },

  {
    id: 3,
    text: 'Call mom',
    day: 'June 12th at 3:30 PM',
    reminder: false,
  },
  {
    id: 4,
    text: 'Submit project report',
    day: 'June 15th at 5:00 PM',
    reminder: true,
  },
  {
    id: 5,
    text: 'Pick up dry cleaning',
    day: 'June 18th at 12:00 PM',
    reminder: false,
  },
  {
    id: 6,
    text: 'Attend yoga class',
    day: 'June 20th at 7:30 AM',
    reminder: true,
  },
];
