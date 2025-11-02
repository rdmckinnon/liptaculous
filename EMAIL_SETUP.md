# Email Collection Setup Guide

The form is currently configured but needs a backend service. Here are your options:

## Option 1: Formspree (Recommended - Easiest)

**Free tier**: 50 submissions/month

### Setup Steps:
1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (looks like `xyzabc123`)
5. In `src/pages/index.astro` line 92, replace `YOUR_FORM_ID` with your actual form ID:
   ```html
   action="https://formspree.io/f/xyzabc123"
   ```
6. That's it! Emails will be sent to your Formspree account and forwarded to your email

**Features:**
- Email notifications
- Spam protection
- Export to CSV
- Integrations with Mailchimp, Google Sheets, etc.

## Option 2: FormSubmit

**Free tier**: Unlimited submissions

### Setup Steps:
1. In `src/pages/index.astro` line 92, replace the action with:
   ```html
   action="https://formsubmit.co/your@email.com"
   ```
2. Deploy your site
3. Submit a test form
4. Check your email and click the confirmation link
5. Done! You'll receive emails for every submission

**Features:**
- No registration required
- Email notifications
- Customizable success page
- Spam protection

## Option 3: Cloudflare Workers + KV

**Free tier**: 100,000 requests/day

### Setup (More Technical):
1. Create a Cloudflare Worker to handle form submissions
2. Store emails in Cloudflare KV storage
3. Optionally integrate with email service (SendGrid, Mailgun, etc.)

### Example Worker Code:
```javascript
export default {
  async fetch(request, env) {
    if (request.method === 'POST') {
      const formData = await request.formData();
      const email = formData.get('email');

      // Store in KV
      await env.EMAILS.put(Date.now().toString(), email);

      // Return success
      return new Response('Success', { status: 200 });
    }
    return new Response('Method not allowed', { status: 405 });
  }
}
```

## Option 4: Google Forms

### Setup Steps:
1. Create a Google Form
2. Add an email field
3. Get the form action URL
4. Update the form in `src/pages/index.astro`

**Note**: This requires more complex integration for good UX

## Current Status

The form is set up with **Formspree** placeholders. You need to:
1. Choose one of the options above
2. Update the form action URL in `src/pages/index.astro:92`
3. Test it after deployment

## Testing

After setup:
1. Deploy your site
2. Submit a test email
3. Verify you receive it
4. Check spam folder if needed

## Recommended Choice

For quick setup: **Formspree** or **FormSubmit**
- Both are free and easy to set up
- No coding required
- Professional features included
