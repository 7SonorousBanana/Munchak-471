import { test, expect } from '@playwright/test';


//Form Authentication (Login success)
test('Successful login', async ({ page }) => {
    await page.goto('/login');

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
});


//Checkboxes
test('Checkbox selection', async ({ page }) => {
    await page.goto('/checkboxes');

    const checkbox1 = page.locator('input[type="checkbox"]').first();
    await checkbox1.check();

    await expect(checkbox1).toBeChecked();
});


//Dropdown
test('Select option from dropdown', async ({ page }) => {
    await page.goto('/dropdown');

    await page.selectOption('#dropdown', '2');

    await expect(page.locator('#dropdown')).toHaveValue('2');
});


//Dynamic Loading
test('Dynamic loading content appears', async ({ page }) => {
    await page.goto('/dynamic_loading/2');

    await page.click('button');

    await expect(page.locator('#finish h4'))
        .toHaveText('Hello World!', { timeout: 10000 });
});


//Add/Remove Elements
test('Add and remove element', async ({ page }) => {
    await page.goto('/add_remove_elements/');

    await page.click('button:has-text("Add Element")');

    const deleteButton = page.locator('button:has-text("Delete")');
    await expect(deleteButton).toBeVisible();

    await deleteButton.click();
    await expect(deleteButton).toHaveCount(0);
});
