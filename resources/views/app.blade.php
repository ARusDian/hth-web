<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

  <title inertia>{{ config('app.name', 'Laravel') }}</title>

  <!-- Scripts -->
  <script>
    window.LARAVEL_ASSET_URL = "{{ asset('') }}";
  </script>
  @routes
  @viteReactRefresh
  @vite('resources/js/app.tsx')
  @inertiaHead
</head>

<body class="font-sans antialiased">
  @inertia
</body>

</html>
