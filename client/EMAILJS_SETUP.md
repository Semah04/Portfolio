# EmailJS Setup Guide

This guide will help you set up EmailJS to make the contact form functional.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_email}}` - Your email address (hardcoded in the form)

4. Example template:
   ```
   Subject: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```

5. Note down your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the `client` directory (if it doesn't exist)
2. Add the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials from steps 2-4

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email inbox for the message

## Troubleshooting

- **Form submits but no email received**: Check your EmailJS dashboard for error logs
- **Environment variables not working**: Make sure you're using `NEXT_PUBLIC_` prefix and restart your dev server
- **CORS errors**: EmailJS handles CORS automatically, but check your browser console for any issues

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- EmailJS Public Key is safe to expose in frontend code (it's designed for client-side use)
- For production, add these environment variables in your Vercel project settings

## Vercel Deployment

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the three EmailJS environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Redeploy your application

## Alternative: Form Submission Services

If you prefer not to use EmailJS, you can integrate with:
- **Formspree** - Simple form backend
- **Resend** - Modern email API
- **SendGrid** - Email delivery service
- **Your own backend API** - Full control

For any of these alternatives, you'll need to update the `handleSubmit` function in `client/src/app/contact/page.tsx`.

