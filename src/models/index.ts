import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: '邮箱格式错误' }),
  password: z.string().min(8, { message: '最小需要8ge字符' }),
});

export type LoginModel = z.infer<typeof loginSchema>;

export const initLoginModel: LoginModel = {
  email: '',
  password: '',
};
