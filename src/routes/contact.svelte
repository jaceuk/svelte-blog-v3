<script type="ts">
  import Overlay from '@components/Overlay.svelte';
  import Loader from '@components/Loader.svelte';
  import Alert from '@components/Alert.svelte';
  import PagePanel from '@components/PagePanel.svelte';
  import Button from '@components/Button.svelte';
  import PageHeader from '@components/PageHeader.svelte';
  import Transition from '@components/Transition.svelte';

  interface IOutcome {
    status: number;
    message: string;
  }

  let name: string;
  let email: string;
  let message: string;

  let processing = false;
  let response: IOutcome;
  let outcome: IOutcome = { status: 0, message: '' };

  async function checkRecaptcha(token: string) {
    const response = await fetch('/api/verify', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message,
        gRecaptchaToken: token,
      }),
    }).catch((error) => {
      console.log(error);
    });

    return response;
  }

  async function handleSubmit() {
    processing = true;

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: 'contactSubmit' })
        .then(async (token: string) => {
          const response = await checkRecaptcha(token);
          if (response && response.status === 200) {
            await sendEmail();
          } else {
            outcome.status = 400;
            outcome.message = 'ReCaptcha verification failed.';
          }
          processing = false;
        });
    });
  }

  async function sendEmail() {
    try {
      const submit = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      response = await submit.json();
      outcome = response;
      console.log(outcome.message);

      name = '';
      email = '';
      message = '';
    } catch (error) {
      outcome.status = 500;
      outcome.message = 'Server failed to respond.';
      console.log(error);
    }
  }
</script>

<svelte:head>
  <title>Contact</title>
  <script
    src="https://www.google.com/recaptcha/api.js?render={import.meta.env.VITE_RECAPTCHA_SITE_KEY}"
    async
    defer></script>
</svelte:head>

<PageHeader>Let's talk</PageHeader>

{#if processing}
  <Overlay><Loader>Sending your message</Loader></Overlay>
{/if}

<PagePanel>
  <Transition>
    <div class="h3">Please get in touch to talk about, well, anything really.</div>

    <div class="container">
      <form on:submit|preventDefault={handleSubmit}>
        {#if outcome.status === 200}
          <Alert type="success">Your message was sent successfully.</Alert>
        {/if}

        {#if outcome.status === 400}
          <Alert type="error">ReCAPTCHA failed. Please try again.</Alert>
        {/if}

        {#if outcome.status === 500}
          <Alert type="error"
            >There was a problem sending your message, please try again.<br />If the problem perists please email
            info@jace.info.</Alert
          >
        {/if}

        <div class="form-field">
          <label for="name" class="label"> Your name <span class="small required">(required)</span></label>
          <input id="name" type="text" class="input" required bind:value={name} />
        </div>

        <div class="form-field">
          <label for="email" class="label">Your email address <span class="small required">(required)</span></label>
          <input id="email" type="email" class="input" required bind:value={email} />
        </div>

        <div class="form-field">
          <label for="message" class="label">Your message <span class="small required">(required)</span></label>
          <textarea id="message" class="input" rows={8} required bind:value={message} />
        </div>

        <div class="submit">
          <Button text="Send your message" />
        </div>
      </form>
    </div>
  </Transition>
</PagePanel>

<style type="scss">
  .required {
    color: var(--color-orange);
  }
  .container {
    border-radius: var(--border-radius-medium);
    box-shadow: var(--card-box-shadow);
    background: var(--color-dark-grey);
    padding: var(--padding-large);
    padding: var(--size-large);
    max-width: 850px;
  }

  form {
    display: grid;
    gap: var(--size-large);
  }

  .form-field {
    display: grid;
    gap: var(--size-base);
  }

  .h3 {
    margin-bottom: var(--size-large);
    max-width: var(--size-content-max-width);
  }

  .label {
    display: block;
  }

  .input {
    border: none;
    width: 100%;
    padding: var(--size-medium);
    background: var(--color-grey);
    border-radius: var(--border-radius-small);
    justify-items: center;
    color: var(--color-white);
    box-shadow: inset 0px 0px 0px 2px var(--color-grey);
  }

  .submit {
    margin: 0 auto;
  }
</style>
