import { test } from "@playwright/test";

const url = 'http://localhost:3000/'

test("homepage", async ({ page }) => {
  await page.goto(url);
  await page.getByText('Hello! I am Teun. Software Engineer.').click();
  await page.getByText('Welcome to my portfolio.').click();
  await page.getByRole('img', { name: 'portret photo of Teun Spithoven with transparent background' }).click();
  await page.getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('link', { name: 'Euro-Dollar converter' }).click();
  await page.getByRole('heading', { name: 'Euro Dollar Converter' }).click();
  await page.getByText('In my first semester I learned my first programming language: C#. During this se').click();
  await page.getByRole('img', { name: 'project image' }).click();
  await page.getByRole('link', { name: '👈Projects' }).click();
  await page.getByRole('link', { name: 'Shop Register System' }).click();
  await page.getByRole('heading', { name: 'Shop Register System' }).click();
  await page.getByText('After making more of these little assignments I made my final project of my firs').click();
  await page.getByRole('img', { name: 'project image' }).click();
  await page.getByRole('link', { name: '👈Projects' }).click();
  await page.getByRole('link', { name: 'Circus Train' }).click();
  await page.getByRole('heading', { name: 'Circus Train' }).click();
  await page.getByText('In semester 2 of the study, i wrote a program that sorts circus animals into tra').click();
  await page.getByRole('img', { name: 'project image' }).click();
  await page.getByRole('link', { name: '👈Projects' }).click();
  await page.getByRole('link', { name: 'Bolus Calculator' }).click();
  await page.getByRole('heading', { name: 'Bolus Calculator' }).click();
  await page.getByText('In semester 2 I also did a group project for the company Philips, we made a dist').click();
  await page.getByRole('img', { name: 'project image' }).click();
  await page.getByRole('link', { name: '👈Projects' }).click();
  await page.getByRole('link', { name: 'Dream Journal' }).click();
  await page.getByText('In semester 2 I had my first encounter with wireframes and multi-layered applica').click();
  await page.getByRole('img', { name: 'project image' }).click();
  await page.getByRole('link', { name: '👈Projects' }).click();
  await page.getByRole('link', { name: 'Dream Journal' }).click();
  await page.getByRole('link', { name: '👈Projects' }).click();
  await page.getByRole('link', { name: 'Ninja Game' }).click();
  await page.getByText('In my third semester I made a web application with Python, Django, Node and VueJ').click();
  await page.getByRole('img', { name: 'project image' }).click();
  await page.getByRole('link', { name: '👈Projects' }).click();
  await page.getByRole('link', { name: '🏠Home' }).click();
});
