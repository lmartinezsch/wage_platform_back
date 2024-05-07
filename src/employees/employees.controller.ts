import { RequestHandler } from 'express';

export class EmployeesController {
  constructor() {}

  async getBalance(req: RequestHandler<{ id: string }>, res: any, next: any) {
    res.status(200).json({
      employeeID: 'E01',
      totalEarnedWages: 1200,
      currency: 'USD',
    });
  }
}
