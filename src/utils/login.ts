import { Page, expect } from 'playwright/test';

export async function loginLogout(
    page: Page,
    username: string,
    password: string) {

    await page.goto('http://automationexercise.com');
    await expect(page).toHaveTitle('Automation Exercise');
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toHaveText('Login to your account');
    await page.fill('[data-qa="login-email"]', username)
    await page.fill('[data-qa="login-password"]', password)
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Logged in as Daniel')).toHaveText('Logged in as Daniel');
    await page.getByRole('link', { name: ' Logout' }).click();
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toHaveText('Login to your account');

}
export async function login(
    page: Page,
    username: string,
    password: string) {

    await page.goto('http://automationexercise.com');
    await expect(page).toHaveTitle('Automation Exercise');
    await page.getByRole('link', { name: 'Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toHaveText('Login to your account');
    await page.fill('[data-qa="login-email"]', username)
    await page.fill('[data-qa="login-password"]', password)
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Logged in as Daniel')).toHaveText('Logged in as Daniel');
}


