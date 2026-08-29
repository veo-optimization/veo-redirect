export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Перетворюємо POST-запит від WayForPay на GET-запит
    if (request.method === "POST") {
      return Response.redirect(url.href, 303);
    }

    return env.ASSETS.fetch(request);
  }
}
