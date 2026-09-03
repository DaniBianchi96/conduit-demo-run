
import { test } from '@playwright/test';
import { dados } from '../data/dados';
import { loginLogout } from '../utils/login';

test('Login e Logout', async ({ page }) => {
  await loginLogout(page,dados.username, dados.password);

});

