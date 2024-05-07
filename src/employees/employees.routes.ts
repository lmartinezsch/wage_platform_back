import { Router } from 'express';
import { EmployeesController } from './employees.controller';

const router = Router();
const employeesController = new EmployeesController();
router.get('/:id/balance', employeesController.getBalance);

export default router;
