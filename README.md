## Laravel 5.6 Básico

Série de screencasts composta por treze vídeos que demonstram várias características do framework Laravel.

[Playlist no YouTube](https://www.youtube.com/watch?v=lO_udEy9I4U&list=PLIFOx3X8xDut2X2ydevlVvFKkqFxZ4SX9)

[Parte 1 - hasMany Relationships e Tinker](https://github.com/leandroramos/laravel_basico/tree/part1)

[Parte 2 - hasManyThrough Relationships](https://github.com/leandroramos/laravel_basico/tree/part2)

[Parte 3 - Factories](https://github.com/leandroramos/laravel_basico/tree/part3)

[Parte 4 - Controllers e Rotas](https://github.com/leandroramos/laravel_basico/tree/part4)

[Parte 5 - PostController](https://github.com/leandroramos/laravel_basico/tree/part5)

[Parte 6 - Login](https://github.com/leandroramos/laravel_basico/tree/part6)

[Parte 7 - Views](https://github.com/leandroramos/laravel_basico/tree/part7)

[Parte 8 - Formulário - Create/Edit](https://github.com/leandroramos/laravel_basico/tree/part8)

[Parte 9 - Listando posts do autor](https://github.com/leandroramos/laravel_basico/tree/part9)

[Parte 10 - Apagando posts do autor](https://github.com/leandroramos/laravel_basico/tree/part10)

[Parte 11 - Editando posts do autor](https://github.com/leandroramos/laravel_basico/tree/part11)

[Parte 12 - Deletando comentários](https://github.com/leandroramos/laravel_basico/tree/part12)

[Parte 13 - Menu da aplicação](https://github.com/leandroramos/laravel_basico/tree/part13)

**Dica:** Cada parte da série é um branch deste repositório.

├── .env.example
├── .gitattributes
├── .gitignore
├── README.md
├── _bn
├── app
    ├── Author.php
    ├── Comment.php
    ├── Console
    │   └── Kernel.php
    ├── Exceptions
    │   └── Handler.php
    ├── Http
    │   ├── Controllers
    │   │   ├── Auth
    │   │   │   ├── ForgotPasswordController.php
    │   │   │   ├── LoginController.php
    │   │   │   ├── RegisterController.php
    │   │   │   └── ResetPasswordController.php
    │   │   ├── AuthorController.php
    │   │   ├── CommentController.php
    │   │   ├── Controller.php
    │   │   └── PostController.php
    │   ├── Kernel.php
    │   └── Middleware
    │   │   ├── EncryptCookies.php
    │   │   ├── RedirectIfAuthenticated.php
    │   │   ├── TrimStrings.php
    │   │   ├── TrustProxies.php
    │   │   └── VerifyCsrfToken.php
    ├── Post.php
    ├── Providers
    │   ├── AppServiceProvider.php
    │   ├── AuthServiceProvider.php
    │   ├── BroadcastServiceProvider.php
    │   ├── EventServiceProvider.php
    │   └── RouteServiceProvider.php
    └── User.php
├── article_stuff
    ├── images
    │   └── cover.svg
    ├── markdown
    │   ├── part1.md
    │   ├── part2.md
    │   └── part3.md
    └── model
    │   ├── laravel_basico_part1.mwb
    │   ├── laravel_basico_part1.png
    │   ├── laravel_basico_part2.mwb
    │   └── laravel_basico_part2.png
├── artisan
├── bootstrap
    ├── app.php
    └── cache
    │   └── .gitignore
├── composer.json
├── composer.lock
├── config
    ├── app.php
    ├── auth.php
    ├── broadcasting.php
    ├── cache.php
    ├── database.php
    ├── filesystems.php
    ├── hashing.php
    ├── logging.php
    ├── mail.php
    ├── queue.php
    ├── services.php
    ├── session.php
    └── view.php
├── database
    ├── .gitignore
    ├── factories
    │   ├── AuthorFactory.php
    │   ├── CommentFactory.php
    │   ├── PostFactory.php
    │   └── UserFactory.php
    ├── migrations
    │   ├── 2014_10_12_000000_create_users_table.php
    │   ├── 2014_10_12_100000_create_password_resets_table.php
    │   ├── 2018_02_11_133833_create_posts_table.php
    │   ├── 2018_02_11_133854_create_comments_table.php
    │   ├── 2018_02_11_151840_create_authors_table.php
    │   └── 2018_02_11_152637_add_author_id_to_posts.php
    └── seeds
    │   └── DatabaseSeeder.php
├── idf
    ├── .env.example
    ├── .gitignore
    ├── README.md
    ├── api.http
    ├── package-lock.json
    ├── package.json
    ├── prisma
    │   ├── migrations
    │   │   ├── 20240523010541_create_database
    │   │   │   └── migration.sql
    │   │   ├── 20240523141213_alter_line_payment_status_to_string
    │   │   │   └── migration.sql
    │   │   ├── 20240529010455_create_tables_orders_and_products
    │   │   │   └── migration.sql
    │   │   ├── 20240529014514_add_unique_to_name_for_product
    │   │   │   └── migration.sql
    │   │   ├── 20240529020434_add_colum_quantity_on_order
    │   │   │   └── migration.sql
    │   │   ├── 20240530011130_add_row_url_qr_code
    │   │   │   └── migration.sql
    │   │   ├── 20240530205032_alter_passwordhashed_to_password
    │   │   │   └── migration.sql
    │   │   ├── 20240603214724_create_column_url_comprovant
    │   │   │   └── migration.sql
    │   │   ├── 20240605194648_add_relationament_order_and_product
    │   │   │   └── migration.sql
    │   │   └── migration_lock.toml
    │   └── schema.prisma
    ├── src
    │   ├── @types
    │   │   └── fastify-jwt.d.ts
    │   ├── app.ts
    │   ├── env
    │   │   └── index.ts
    │   ├── lib
    │   │   └── prisma.ts
    │   ├── server.ts
    │   ├── utils
    │   │   ├── api.ts
    │   │   └── generate-slug.ts
    │   └── v1
    │   │   ├── attendees
    │   │       ├── delete-attendee-for-event.ts
    │   │       ├── edit-attendee-for-event.ts
    │   │       ├── edit-for-event.ts
    │   │       ├── get-attendee-badge.ts
    │   │       └── register-for-event.ts
    │   │   ├── auth
    │   │       └── sessions.ts
    │   │   ├── check-ins
    │   │       └── check-in.ts
    │   │   ├── corporation
    │   │       ├── create-corporation.ts
    │   │       ├── edit-corporation.ts
    │   │       └── get-corporation.ts
    │   │   ├── events
    │   │       ├── create-event.ts
    │   │       ├── delete-event.ts
    │   │       ├── get-all-events.ts
    │   │       ├── get-event-attendees-by-corporation.ts
    │   │       └── get-event.ts
    │   │   ├── leader
    │   │       ├── create-leader.ts
    │   │       ├── delete-leader.ts
    │   │       ├── edit-leader.ts
    │   │       └── get-all-leaders.ts
    │   │   ├── order
    │   │       ├── cancel-roder.ts
    │   │       ├── confirm-payment-order.ts
    │   │       ├── create-order.ts
    │   │       ├── get-all-orders.ts
    │   │       ├── get-order.ts
    │   │       └── save-comprovant-order.ts
    │   │   ├── product
    │   │       ├── create-product.ts
    │   │       └── get-all-product.ts
    │   │   └── routes.ts
    └── tsconfig.json
├── package.json
├── phpunit.xml
├── public
    ├── .htaccess
    ├── css
    │   └── app.css
    ├── favicon.ico
    ├── index.php
    ├── js
    │   └── app.js
    ├── robots.txt
    └── web.config
├── resources
    ├── assets
    │   ├── js
    │   │   ├── app.js
    │   │   ├── bootstrap.js
    │   │   └── components
    │   │   │   └── ExampleComponent.vue
    │   └── sass
    │   │   ├── _variables.scss
    │   │   └── app.scss
    ├── lang
    │   └── en
    │   │   ├── auth.php
    │   │   ├── pagination.php
    │   │   ├── passwords.php
    │   │   └── validation.php
    └── views
    │   └── welcome.blade.php
├── routes
    ├── api.php
    ├── channels.php
    ├── console.php
    └── web.php
├── server.php
├── storage
    ├── app
    │   ├── .gitignore
    │   └── public
    │   │   └── .gitignore
    ├── framework
    │   ├── .gitignore
    │   ├── cache
    │   │   └── .gitignore
    │   ├── sessions
    │   │   └── .gitignore
    │   ├── testing
    │   │   └── .gitignore
    │   └── views
    │   │   └── .gitignore
    └── logs
    │   └── .gitignore
├── tests
    ├── CreatesApplication.php
    ├── Feature
    │   └── ExampleTest.php
    ├── TestCase.php
    └── Unit
    │   └── ExampleTest.php
└── webpack.mix.js


/.env.example:
--------------------------------------------------------------------------------
 1 | APP_NAME=Laravel
 2 | APP_ENV=local
 3 | APP_KEY=
 4 | APP_DEBUG=true
 5 | APP_URL=http://localhost
 6 | 
 7 | LOG_CHANNEL=stack
 8 | 
 9 | DB_CONNECTION=mysql
10 | DB_HOST=127.0.0.1
11 | DB_PORT=3306
12 | DB_DATABASE=homestead
13 | DB_USERNAME=homestead
14 | DB_PASSWORD=secret
15 | 
16 | BROADCAST_DRIVER=log
17 | CACHE_DRIVER=file
18 | SESSION_DRIVER=file
19 | SESSION_LIFETIME=120
20 | QUEUE_DRIVER=sync
21 | 
22 | REDIS_HOST=127.0.0.1
23 | REDIS_PASSWORD=null
24 | REDIS_PORT=6379
25 | 
26 | MAIL_DRIVER=smtp
27 | MAIL_HOST=smtp.mailtrap.io
28 | MAIL_PORT=2525
29 | MAIL_USERNAME=null
30 | MAIL_PASSWORD=null
31 | MAIL_ENCRYPTION=null
32 | 
33 | PUSHER_APP_ID=
34 | PUSHER_APP_KEY=
35 | PUSHER_APP_SECRET=
36 | PUSHER_APP_CLUSTER=mt1
37 | 
38 | MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
39 | MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
40 | 


--------------------------------------------------------------------------------
/.gitattributes:
--------------------------------------------------------------------------------
1 | * text=auto
2 | *.css linguist-vendored
3 | *.scss linguist-vendored
4 | *.js linguist-vendored
5 | CHANGELOG.md export-ignore
6 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
 1 | /node_modules
 2 | /public/hot
 3 | /public/storage
 4 | /storage/*.key
 5 | /vendor
 6 | /.idea
 7 | /.vscode
 8 | /.vagrant
 9 | Homestead.json
10 | Homestead.yaml
11 | npm-debug.log
12 | yarn-error.log
13 | .env
14 | *.swp
15 | *.bak
16 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | ## Laravel 5.6 Básico
 2 | 
 3 | Série de screencasts composta por treze vídeos que demonstram várias características do framework Laravel.
 4 | 
 5 | [Playlist no YouTube](https://www.youtube.com/watch?v=lO_udEy9I4U&list=PLIFOx3X8xDut2X2ydevlVvFKkqFxZ4SX9)
 6 | 
 7 | [Parte 1 - hasMany Relationships e Tinker](https://github.com/leandroramos/laravel_basico/tree/part1)
 8 | 
 9 | [Parte 2 - hasManyThrough Relationships](https://github.com/leandroramos/laravel_basico/tree/part2)
10 | 
11 | [Parte 3 - Factories](https://github.com/leandroramos/laravel_basico/tree/part3)
12 | 
13 | [Parte 4 - Controllers e Rotas](https://github.com/leandroramos/laravel_basico/tree/part4)
14 | 
15 | [Parte 5 - PostController](https://github.com/leandroramos/laravel_basico/tree/part5)
16 | 
17 | [Parte 6 - Login](https://github.com/leandroramos/laravel_basico/tree/part6)
18 | 
19 | [Parte 7 - Views](https://github.com/leandroramos/laravel_basico/tree/part7)
20 | 
21 | [Parte 8 - Formulário - Create/Edit](https://github.com/leandroramos/laravel_basico/tree/part8)
22 | 
23 | [Parte 9 - Listando posts do autor](https://github.com/leandroramos/laravel_basico/tree/part9)
24 | 
25 | [Parte 10 - Apagando posts do autor](https://github.com/leandroramos/laravel_basico/tree/part10)
26 | 
27 | [Parte 11 - Editando posts do autor](https://github.com/leandroramos/laravel_basico/tree/part11)
28 | 
29 | [Parte 12 - Deletando comentários](https://github.com/leandroramos/laravel_basico/tree/part12)
30 | 
31 | [Parte 13 - Menu da aplicação](https://github.com/leandroramos/laravel_basico/tree/part13)
32 | 
33 | **Dica:** Cada parte da série é um branch deste repositório.
34 | 


--------------------------------------------------------------------------------
/_bn:
--------------------------------------------------------------------------------
 1 | # Passos para a elaboração do artigo
 2 | 
 3 | ## Modelagem do banco de dados
 4 | - Modelar no MySQL Workbench
 5 | - Colocar o model.mwb e um .png no repositório
 6 | 
 7 | ## Criação do projeto Laravel
 8 | - composer create-project laravel/laravel laravel_basico
 9 | 
10 | ## Criação dos models e migrations
11 | - php artisan make:model Post -crmf
12 | - php artisan make:model Comment -crmf
13 | 
14 | ### Criação dos campos nas tabelas
15 | - database/migrations/create_posts_table.php
16 |   - 
17 | - database/migrations/create_comments_table.php
18 |   - public function up()
19 |   ¦ { 
20 |   ¦ ¦ ¦ Schema::create('comments', function (Blueprint $table) {
21 |   ¦ ¦ ¦ ¦ ¦ $table->increments('id');
22 |   ¦ ¦ ¦ ¦ ¦ $table->string('author_email');
23 |   ¦ ¦ ¦ ¦ ¦ $table->text('content');
24 |   ¦ ¦ ¦ ¦ ¦ $text->integer('post_id')->unsigned();
25 |   ¦ ¦ ¦ ¦ ¦ $table->timestamps();
26 | 
27 |   ¦ ¦ ¦ ¦ ¦ $table->foreign('post_id')->references('id')->on('posts');
28 |   ¦ ¦ ¦ }); 
29 |   ¦ }
30 | 


--------------------------------------------------------------------------------
/app/Author.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App;
 4 | 
 5 | use Illuminate\Database\Eloquent\Model;
 6 | 
 7 | class Author extends Model
 8 | {
 9 |     public function posts()
10 |     {
11 |         return $this->hasMany('App\Post');
12 |     }
13 |     public function comments()
14 |     {
15 |         return $this->hasManyThrough('App\Comment', 'App\Post');
16 |     }
17 | }
18 | 


--------------------------------------------------------------------------------
/app/Comment.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App;
 4 | 
 5 | use Illuminate\Database\Eloquent\Model;
 6 | 
 7 | class Comment extends Model
 8 | {
 9 |     public function post()
10 |     {
11 |         return $this->belongsTo('App\Post');
12 |     }
13 | }
14 | 


--------------------------------------------------------------------------------
/app/Console/Kernel.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Console;
 4 | 
 5 | use Illuminate\Console\Scheduling\Schedule;
 6 | use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
 7 | 
 8 | class Kernel extends ConsoleKernel
 9 | {
10 |     /**
11 |      * The Artisan commands provided by your application.
12 |      *
13 |      * @var array
14 |      */
15 |     protected $commands = [
16 |         //
17 |     ];
18 | 
19 |     /**
20 |      * Define the application's command schedule.
21 |      *
22 |      * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
23 |      * @return void
24 |      */
25 |     protected function schedule(Schedule $schedule)
26 |     {
27 |         // $schedule->command('inspire')
28 |         //          ->hourly();
29 |     }
30 | 
31 |     /**
32 |      * Register the commands for the application.
33 |      *
34 |      * @return void
35 |      */
36 |     protected function commands()
37 |     {
38 |         $this->load(__DIR__.'/Commands');
39 | 
40 |         require base_path('routes/console.php');
41 |     }
42 | }
43 | 


--------------------------------------------------------------------------------
/app/Exceptions/Handler.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Exceptions;
 4 | 
 5 | use Exception;
 6 | use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
 7 | 
 8 | class Handler extends ExceptionHandler
 9 | {
10 |     /**
11 |      * A list of the exception types that are not reported.
12 |      *
13 |      * @var array
14 |      */
15 |     protected $dontReport = [
16 |         //
17 |     ];
18 | 
19 |     /**
20 |      * A list of the inputs that are never flashed for validation exceptions.
21 |      *
22 |      * @var array
23 |      */
24 |     protected $dontFlash = [
25 |         'password',
26 |         'password_confirmation',
27 |     ];
28 | 
29 |     /**
30 |      * Report or log an exception.
31 |      *
32 |      * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
33 |      *
34 |      * @param  \Exception  $exception
35 |      * @return void
36 |      */
37 |     public function report(Exception $exception)
38 |     {
39 |         parent::report($exception);
40 |     }
41 | 
42 |     /**
43 |      * Render an exception into an HTTP response.
44 |      *
45 |      * @param  \Illuminate\Http\Request  $request
46 |      * @param  \Exception  $exception
47 |      * @return \Illuminate\Http\Response
48 |      */
49 |     public function render($request, Exception $exception)
50 |     {
51 |         return parent::render($request, $exception);
52 |     }
53 | }
54 | 


--------------------------------------------------------------------------------
/app/Http/Controllers/Auth/ForgotPasswordController.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Controllers\Auth;
 4 | 
 5 | use App\Http\Controllers\Controller;
 6 | use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
 7 | 
 8 | class ForgotPasswordController extends Controller
 9 | {
10 |     /*
11 |     |--------------------------------------------------------------------------
12 |     | Password Reset Controller
13 |     |--------------------------------------------------------------------------
14 |     |
15 |     | This controller is responsible for handling password reset emails and
16 |     | includes a trait which assists in sending these notifications from
17 |     | your application to your users. Feel free to explore this trait.
18 |     |
19 |     */
20 | 
21 |     use SendsPasswordResetEmails;
22 | 
23 |     /**
24 |      * Create a new controller instance.
25 |      *
26 |      * @return void
27 |      */
28 |     public function __construct()
29 |     {
30 |         $this->middleware('guest');
31 |     }
32 | }
33 | 


--------------------------------------------------------------------------------
/app/Http/Controllers/Auth/LoginController.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Controllers\Auth;
 4 | 
 5 | use App\Http\Controllers\Controller;
 6 | use Illuminate\Foundation\Auth\AuthenticatesUsers;
 7 | 
 8 | class LoginController extends Controller
 9 | {
10 |     /*
11 |     |--------------------------------------------------------------------------
12 |     | Login Controller
13 |     |--------------------------------------------------------------------------
14 |     |
15 |     | This controller handles authenticating users for the application and
16 |     | redirecting them to your home screen. The controller uses a trait
17 |     | to conveniently provide its functionality to your applications.
18 |     |
19 |     */
20 | 
21 |     use AuthenticatesUsers;
22 | 
23 |     /**
24 |      * Where to redirect users after login.
25 |      *
26 |      * @var string
27 |      */
28 |     protected $redirectTo = '/home';
29 | 
30 |     /**
31 |      * Create a new controller instance.
32 |      *
33 |      * @return void
34 |      */
35 |     public function __construct()
36 |     {
37 |         $this->middleware('guest')->except('logout');
38 |     }
39 | }
40 | 


--------------------------------------------------------------------------------
/app/Http/Controllers/Auth/RegisterController.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Controllers\Auth;
 4 | 
 5 | use App\User;
 6 | use App\Http\Controllers\Controller;
 7 | use Illuminate\Support\Facades\Validator;
 8 | use Illuminate\Foundation\Auth\RegistersUsers;
 9 | 
10 | class RegisterController extends Controller
11 | {
12 |     /*
13 |     |--------------------------------------------------------------------------
14 |     | Register Controller
15 |     |--------------------------------------------------------------------------
16 |     |
17 |     | This controller handles the registration of new users as well as their
18 |     | validation and creation. By default this controller uses a trait to
19 |     | provide this functionality without requiring any additional code.
20 |     |
21 |     */
22 | 
23 |     use RegistersUsers;
24 | 
25 |     /**
26 |      * Where to redirect users after registration.
27 |      *
28 |      * @var string
29 |      */
30 |     protected $redirectTo = '/home';
31 | 
32 |     /**
33 |      * Create a new controller instance.
34 |      *
35 |      * @return void
36 |      */
37 |     public function __construct()
38 |     {
39 |         $this->middleware('guest');
40 |     }
41 | 
42 |     /**
43 |      * Get a validator for an incoming registration request.
44 |      *
45 |      * @param  array  $data
46 |      * @return \Illuminate\Contracts\Validation\Validator
47 |      */
48 |     protected function validator(array $data)
49 |     {
50 |         return Validator::make($data, [
51 |             'name' => 'required|string|max:255',
52 |             'email' => 'required|string|email|max:255|unique:users',
53 |             'password' => 'required|string|min:6|confirmed',
54 |         ]);
55 |     }
56 | 
57 |     /**
58 |      * Create a new user instance after a valid registration.
59 |      *
60 |      * @param  array  $data
61 |      * @return \App\User
62 |      */
63 |     protected function create(array $data)
64 |     {
65 |         return User::create([
66 |             'name' => $data['name'],
67 |             'email' => $data['email'],
68 |             'password' => bcrypt($data['password']),
69 |         ]);
70 |     }
71 | }
72 | 


--------------------------------------------------------------------------------
/app/Http/Controllers/Auth/ResetPasswordController.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Controllers\Auth;
 4 | 
 5 | use App\Http\Controllers\Controller;
 6 | use Illuminate\Foundation\Auth\ResetsPasswords;
 7 | 
 8 | class ResetPasswordController extends Controller
 9 | {
10 |     /*
11 |     |--------------------------------------------------------------------------
12 |     | Password Reset Controller
13 |     |--------------------------------------------------------------------------
14 |     |
15 |     | This controller is responsible for handling password reset requests
16 |     | and uses a simple trait to include this behavior. You're free to
17 |     | explore this trait and override any methods you wish to tweak.
18 |     |
19 |     */
20 | 
21 |     use ResetsPasswords;
22 | 
23 |     /**
24 |      * Where to redirect users after resetting their password.
25 |      *
26 |      * @var string
27 |      */
28 |     protected $redirectTo = '/home';
29 | 
30 |     /**
31 |      * Create a new controller instance.
32 |      *
33 |      * @return void
34 |      */
35 |     public function __construct()
36 |     {
37 |         $this->middleware('guest');
38 |     }
39 | }
40 | 


--------------------------------------------------------------------------------
/app/Http/Controllers/AuthorController.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Controllers;
 4 | 
 5 | use App\Author;
 6 | use Illuminate\Http\Request;
 7 | 
 8 | class AuthorController extends Controller
 9 | {
10 |     /**
11 |      * Display a listing of the resource.
12 |      *
13 |      * @return \Illuminate\Http\Response
14 |      */
15 |     public function index()
16 |     {
17 |         //
18 |     }
19 | 
20 |     /**
21 |      * Show the form for creating a new resource.
22 |      *
23 |      * @return \Illuminate\Http\Response
24 |      */
25 |     public function create()
26 |     {
27 |         //
28 |     }
29 | 
30 |     /**
31 |      * Store a newly created resource in storage.
32 |      *
33 |      * @param  \Illuminate\Http\Request  $request
34 |      * @return \Illuminate\Http\Response
35 |      */
36 |     public function store(Request $request)
37 |     {
38 |         //
39 |     }
40 | 
41 |     /**
42 |      * Display the specified resource.
43 |      *
44 |      * @param  \App\Author  $author
45 |      * @return \Illuminate\Http\Response
46 |      */
47 |     public function show(Author $author)
48 |     {
49 |         //
50 |     }
51 | 
52 |     /**
53 |      * Show the form for editing the specified resource.
54 |      *
55 |      * @param  \App\Author  $author
56 |      * @return \Illuminate\Http\Response
57 |      */
58 |     public function edit(Author $author)
59 |     {
60 |         //
61 |     }
62 | 
63 |     /**
64 |      * Update the specified resource in storage.
65 |      *
66 |      * @param  \Illuminate\Http\Request  $request
67 |      * @param  \App\Author  $author
68 |      * @return \Illuminate\Http\Response
69 |      */
70 |     public function update(Request $request, Author $author)
71 |     {
72 |         //
73 |     }
74 | 
75 |     /**
76 |      * Remove the specified resource from storage.
77 |      *
78 |      * @param  \App\Author  $author
79 |      * @return \Illuminate\Http\Response
80 |      */
81 |     public function destroy(Author $author)
82 |     {
83 |         //
84 |     }
85 | }
86 | 


--------------------------------------------------------------------------------
/app/Http/Controllers/CommentController.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Controllers;
 4 | 
 5 | use App\Comment;
 6 | use Illuminate\Http\Request;
 7 | 
 8 | class CommentController extends Controller
 9 | {
10 |     /**
11 |      * Display a listing of the resource.
12 |      *
13 |      * @return \Illuminate\Http\Response
14 |      */
15 |     public function index()
16 |     {
17 |         //
18 |     }
19 | 
20 |     /**
21 |      * Show the form for creating a new resource.
22 |      *
23 |      * @return \Illuminate\Http\Response
24 |      */
25 |     public function create()
26 |     {
27 |         //
28 |     }
29 | 
30 |     /**
31 |      * Store a newly created resource in storage.
32 |      *
33 |      * @param  \Illuminate\Http\Request  $request
34 |      * @return \Illuminate\Http\Response
35 |      */
36 |     public function store(Request $request)
37 |     {
38 |         //
39 |     }
40 | 
41 |     /**
42 |      * Display the specified resource.
43 |      *
44 |      * @param  \App\Comment  $comment
45 |      * @return \Illuminate\Http\Response
46 |      */
47 |     public function show(Comment $comment)
48 |     {
49 |         //
50 |     }
51 | 
52 |     /**
53 |      * Show the form for editing the specified resource.
54 |      *
55 |      * @param  \App\Comment  $comment
56 |      * @return \Illuminate\Http\Response
57 |      */
58 |     public function edit(Comment $comment)
59 |     {
60 |         //
61 |     }
62 | 
63 |     /**
64 |      * Update the specified resource in storage.
65 |      *
66 |      * @param  \Illuminate\Http\Request  $request
67 |      * @param  \App\Comment  $comment
68 |      * @return \Illuminate\Http\Response
69 |      */
70 |     public function update(Request $request, Comment $comment)
71 |     {
72 |         //
73 |     }
74 | 
75 |     /**
76 |      * Remove the specified resource from storage.
77 |      *
78 |      * @param  \App\Comment  $comment
79 |      * @return \Illuminate\Http\Response
80 |      */
81 |     public function destroy(Comment $comment)
82 |     {
83 |         //
84 |     }
85 | }
86 | 


--------------------------------------------------------------------------------
/app/Http/Controllers/Controller.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Controllers;
 4 | 
 5 | use Illuminate\Foundation\Bus\DispatchesJobs;
 6 | use Illuminate\Routing\Controller as BaseController;
 7 | use Illuminate\Foundation\Validation\ValidatesRequests;
 8 | use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
 9 | 
10 | class Controller extends BaseController
11 | {
12 |     use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
13 | }
14 | 


--------------------------------------------------------------------------------
/app/Http/Controllers/PostController.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Controllers;
 4 | 
 5 | use App\Post;
 6 | use Illuminate\Http\Request;
 7 | 
 8 | class PostController extends Controller
 9 | {
10 |     /**
11 |      * Display a listing of the resource.
12 |      *
13 |      * @return \Illuminate\Http\Response
14 |      */
15 |     public function index()
16 |     {
17 |         //
18 |     }
19 | 
20 |     /**
21 |      * Show the form for creating a new resource.
22 |      *
23 |      * @return \Illuminate\Http\Response
24 |      */
25 |     public function create()
26 |     {
27 |         //
28 |     }
29 | 
30 |     /**
31 |      * Store a newly created resource in storage.
32 |      *
33 |      * @param  \Illuminate\Http\Request  $request
34 |      * @return \Illuminate\Http\Response
35 |      */
36 |     public function store(Request $request)
37 |     {
38 |         //
39 |     }
40 | 
41 |     /**
42 |      * Display the specified resource.
43 |      *
44 |      * @param  \App\Post  $post
45 |      * @return \Illuminate\Http\Response
46 |      */
47 |     public function show(Post $post)
48 |     {
49 |         //
50 |     }
51 | 
52 |     /**
53 |      * Show the form for editing the specified resource.
54 |      *
55 |      * @param  \App\Post  $post
56 |      * @return \Illuminate\Http\Response
57 |      */
58 |     public function edit(Post $post)
59 |     {
60 |         //
61 |     }
62 | 
63 |     /**
64 |      * Update the specified resource in storage.
65 |      *
66 |      * @param  \Illuminate\Http\Request  $request
67 |      * @param  \App\Post  $post
68 |      * @return \Illuminate\Http\Response
69 |      */
70 |     public function update(Request $request, Post $post)
71 |     {
72 |         //
73 |     }
74 | 
75 |     /**
76 |      * Remove the specified resource from storage.
77 |      *
78 |      * @param  \App\Post  $post
79 |      * @return \Illuminate\Http\Response
80 |      */
81 |     public function destroy(Post $post)
82 |     {
83 |         //
84 |     }
85 | }
86 | 


--------------------------------------------------------------------------------
/app/Http/Kernel.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http;
 4 | 
 5 | use Illuminate\Foundation\Http\Kernel as HttpKernel;
 6 | 
 7 | class Kernel extends HttpKernel
 8 | {
 9 |     /**
10 |      * The application's global HTTP middleware stack.
11 |      *
12 |      * These middleware are run during every request to your application.
13 |      *
14 |      * @var array
15 |      */
16 |     protected $middleware = [
17 |         \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
18 |         \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
19 |         \App\Http\Middleware\TrimStrings::class,
20 |         \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
21 |         \App\Http\Middleware\TrustProxies::class,
22 |     ];
23 | 
24 |     /**
25 |      * The application's route middleware groups.
26 |      *
27 |      * @var array
28 |      */
29 |     protected $middlewareGroups = [
30 |         'web' => [
31 |             \App\Http\Middleware\EncryptCookies::class,
32 |             \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
33 |             \Illuminate\Session\Middleware\StartSession::class,
34 |             // \Illuminate\Session\Middleware\AuthenticateSession::class,
35 |             \Illuminate\View\Middleware\ShareErrorsFromSession::class,
36 |             \App\Http\Middleware\VerifyCsrfToken::class,
37 |             \Illuminate\Routing\Middleware\SubstituteBindings::class,
38 |         ],
39 | 
40 |         'api' => [
41 |             'throttle:60,1',
42 |             'bindings',
43 |         ],
44 |     ];
45 | 
46 |     /**
47 |      * The application's route middleware.
48 |      *
49 |      * These middleware may be assigned to groups or used individually.
50 |      *
51 |      * @var array
52 |      */
53 |     protected $routeMiddleware = [
54 |         'auth' => \Illuminate\Auth\Middleware\Authenticate::class,
55 |         'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
56 |         'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
57 |         'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
58 |         'can' => \Illuminate\Auth\Middleware\Authorize::class,
59 |         'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
60 |         'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
61 |     ];
62 | }
63 | 


--------------------------------------------------------------------------------
/app/Http/Middleware/EncryptCookies.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Middleware;
 4 | 
 5 | use Illuminate\Cookie\Middleware\EncryptCookies as Middleware;
 6 | 
 7 | class EncryptCookies extends Middleware
 8 | {
 9 |     /**
10 |      * The names of the cookies that should not be encrypted.
11 |      *
12 |      * @var array
13 |      */
14 |     protected $except = [
15 |         //
16 |     ];
17 | }
18 | 


--------------------------------------------------------------------------------
/app/Http/Middleware/RedirectIfAuthenticated.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Middleware;
 4 | 
 5 | use Closure;
 6 | use Illuminate\Support\Facades\Auth;
 7 | 
 8 | class RedirectIfAuthenticated
 9 | {
10 |     /**
11 |      * Handle an incoming request.
12 |      *
13 |      * @param  \Illuminate\Http\Request  $request
14 |      * @param  \Closure  $next
15 |      * @param  string|null  $guard
16 |      * @return mixed
17 |      */
18 |     public function handle($request, Closure $next, $guard = null)
19 |     {
20 |         if (Auth::guard($guard)->check()) {
21 |             return redirect('/home');
22 |         }
23 | 
24 |         return $next($request);
25 |     }
26 | }
27 | 


--------------------------------------------------------------------------------
/app/Http/Middleware/TrimStrings.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Middleware;
 4 | 
 5 | use Illuminate\Foundation\Http\Middleware\TrimStrings as Middleware;
 6 | 
 7 | class TrimStrings extends Middleware
 8 | {
 9 |     /**
10 |      * The names of the attributes that should not be trimmed.
11 |      *
12 |      * @var array
13 |      */
14 |     protected $except = [
15 |         'password',
16 |         'password_confirmation',
17 |     ];
18 | }
19 | 


--------------------------------------------------------------------------------
/app/Http/Middleware/TrustProxies.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Middleware;
 4 | 
 5 | use Illuminate\Http\Request;
 6 | use Fideloper\Proxy\TrustProxies as Middleware;
 7 | 
 8 | class TrustProxies extends Middleware
 9 | {
10 |     /**
11 |      * The trusted proxies for this application.
12 |      *
13 |      * @var array
14 |      */
15 |     protected $proxies;
16 | 
17 |     /**
18 |      * The headers that should be used to detect proxies.
19 |      *
20 |      * @var string
21 |      */
22 |     protected $headers = Request::HEADER_X_FORWARDED_ALL;
23 | }
24 | 


--------------------------------------------------------------------------------
/app/Http/Middleware/VerifyCsrfToken.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Http\Middleware;
 4 | 
 5 | use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;
 6 | 
 7 | class VerifyCsrfToken extends Middleware
 8 | {
 9 |     /**
10 |      * The URIs that should be excluded from CSRF verification.
11 |      *
12 |      * @var array
13 |      */
14 |     protected $except = [
15 |         //
16 |     ];
17 | }
18 | 


--------------------------------------------------------------------------------
/app/Post.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App;
 4 | 
 5 | use Illuminate\Database\Eloquent\Model;
 6 | 
 7 | class Post extends Model
 8 | {
 9 |     public function comments()
10 |     {
11 |         return $this->hasMany('App\Comment');
12 |     }
13 | 
14 |     public function author()
15 |     {
16 |         return $this->belongsTo('App\Author');
17 |     }
18 | }
19 | 


--------------------------------------------------------------------------------
/app/Providers/AppServiceProvider.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Providers;
 4 | 
 5 | use Illuminate\Support\ServiceProvider;
 6 | 
 7 | class AppServiceProvider extends ServiceProvider
 8 | {
 9 |     /**
10 |      * Bootstrap any application services.
11 |      *
12 |      * @return void
13 |      */
14 |     public function boot()
15 |     {
16 |         //
17 |     }
18 | 
19 |     /**
20 |      * Register any application services.
21 |      *
22 |      * @return void
23 |      */
24 |     public function register()
25 |     {
26 |         //
27 |     }
28 | }
29 | 


--------------------------------------------------------------------------------
/app/Providers/AuthServiceProvider.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Providers;
 4 | 
 5 | use Illuminate\Support\Facades\Gate;
 6 | use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
 7 | 
 8 | class AuthServiceProvider extends ServiceProvider
 9 | {
10 |     /**
11 |      * The policy mappings for the application.
12 |      *
13 |      * @var array
14 |      */
15 |     protected $policies = [
16 |         'App\Model' => 'App\Policies\ModelPolicy',
17 |     ];
18 | 
19 |     /**
20 |      * Register any authentication / authorization services.
21 |      *
22 |      * @return void
23 |      */
24 |     public function boot()
25 |     {
26 |         $this->registerPolicies();
27 | 
28 |         //
29 |     }
30 | }
31 | 


--------------------------------------------------------------------------------
/app/Providers/BroadcastServiceProvider.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Providers;
 4 | 
 5 | use Illuminate\Support\ServiceProvider;
 6 | use Illuminate\Support\Facades\Broadcast;
 7 | 
 8 | class BroadcastServiceProvider extends ServiceProvider
 9 | {
10 |     /**
11 |      * Bootstrap any application services.
12 |      *
13 |      * @return void
14 |      */
15 |     public function boot()
16 |     {
17 |         Broadcast::routes();
18 | 
19 |         require base_path('routes/channels.php');
20 |     }
21 | }
22 | 


--------------------------------------------------------------------------------
/app/Providers/EventServiceProvider.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Providers;
 4 | 
 5 | use Illuminate\Support\Facades\Event;
 6 | use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
 7 | 
 8 | class EventServiceProvider extends ServiceProvider
 9 | {
10 |     /**
11 |      * The event listener mappings for the application.
12 |      *
13 |      * @var array
14 |      */
15 |     protected $listen = [
16 |         'App\Events\Event' => [
17 |             'App\Listeners\EventListener',
18 |         ],
19 |     ];
20 | 
21 |     /**
22 |      * Register any events for your application.
23 |      *
24 |      * @return void
25 |      */
26 |     public function boot()
27 |     {
28 |         parent::boot();
29 | 
30 |         //
31 |     }
32 | }
33 | 


--------------------------------------------------------------------------------
/app/Providers/RouteServiceProvider.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App\Providers;
 4 | 
 5 | use Illuminate\Support\Facades\Route;
 6 | use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
 7 | 
 8 | class RouteServiceProvider extends ServiceProvider
 9 | {
10 |     /**
11 |      * This namespace is applied to your controller routes.
12 |      *
13 |      * In addition, it is set as the URL generator's root namespace.
14 |      *
15 |      * @var string
16 |      */
17 |     protected $namespace = 'App\Http\Controllers';
18 | 
19 |     /**
20 |      * Define your route model bindings, pattern filters, etc.
21 |      *
22 |      * @return void
23 |      */
24 |     public function boot()
25 |     {
26 |         //
27 | 
28 |         parent::boot();
29 |     }
30 | 
31 |     /**
32 |      * Define the routes for the application.
33 |      *
34 |      * @return void
35 |      */
36 |     public function map()
37 |     {
38 |         $this->mapApiRoutes();
39 | 
40 |         $this->mapWebRoutes();
41 | 
42 |         //
43 |     }
44 | 
45 |     /**
46 |      * Define the "web" routes for the application.
47 |      *
48 |      * These routes all receive session state, CSRF protection, etc.
49 |      *
50 |      * @return void
51 |      */
52 |     protected function mapWebRoutes()
53 |     {
54 |         Route::middleware('web')
55 |              ->namespace($this->namespace)
56 |              ->group(base_path('routes/web.php'));
57 |     }
58 | 
59 |     /**
60 |      * Define the "api" routes for the application.
61 |      *
62 |      * These routes are typically stateless.
63 |      *
64 |      * @return void
65 |      */
66 |     protected function mapApiRoutes()
67 |     {
68 |         Route::prefix('api')
69 |              ->middleware('api')
70 |              ->namespace($this->namespace)
71 |              ->group(base_path('routes/api.php'));
72 |     }
73 | }
74 | 


--------------------------------------------------------------------------------
/app/User.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace App;
 4 | 
 5 | use Illuminate\Notifications\Notifiable;
 6 | use Illuminate\Foundation\Auth\User as Authenticatable;
 7 | 
 8 | class User extends Authenticatable
 9 | {
10 |     use Notifiable;
11 | 
12 |     /**
13 |      * The attributes that are mass assignable.
14 |      *
15 |      * @var array
16 |      */
17 |     protected $fillable = [
18 |         'name', 'email', 'password',
19 |     ];
20 | 
21 |     /**
22 |      * The attributes that should be hidden for arrays.
23 |      *
24 |      * @var array
25 |      */
26 |     protected $hidden = [
27 |         'password', 'remember_token',
28 |     ];
29 | }
30 | 


--------------------------------------------------------------------------------
/article_stuff/markdown/part1.md:
--------------------------------------------------------------------------------
 1 | # Passos para a elaboração do artigo
 2 | 
 3 | ## Modelagem do banco de dados
 4 | - Modelar no MySQL Workbench
 5 | - Colocar o model.mwb e um .png no repositório
 6 | 
 7 | ## Criação do banco de dados
 8 | - Criar o banco de dados no SGBD preferido
 9 | 
10 | ## Criação do projeto Laravel
11 | - composer create-project laravel/laravel laravel_basico
12 | 
13 | ## Configurar as variáveis de ambiente
14 | - Editar o arquivo .env com nossos dados de conexão ao banco de dados
15 | 
16 | ## Criação dos models e migrations
17 | - php artisan make:model Post -crmf
18 | - php artisan make:model Comment -crmf
19 | 
20 | ### Criação dos campos nas tabelas
21 | - database/migrations/create_posts_table.php
22 |   ```php
23 |   public function up()
24 |   { 
25 |       Schema::create('posts', function (Blueprint $table) {
26 |           $table->increments('id');
27 |           $table->string('title');
28 |           $table->text('content');
29 |           $table->timestamps();
30 |       }); 
31 |   }
32 |   ```
33 | 
34 | - database/migrations/create_comments_table.php
35 |   ```php
36 |   public function up()
37 |   { 
38 |       Schema::create('comments', function (Blueprint $table) {
39 |           $table->increments('id');
40 |           $table->string('author_email');
41 |           $table->text('content');
42 |           $text->integer('post_id')->unsigned();
43 |           $table->timestamps();
44 | 
45 |           $table->foreign('post_id')->references('id')->on('posts');
46 |       }); 
47 |   }
48 |   ```
49 | 
50 | ### Rodar as migrations
51 | - php artisan migrate
52 | 
53 | ### Colocar o relacionamento 1:N nos models
54 | - app/Post.php
55 |     ```php
56 |     public function post()
57 |     {
58 |         return $this->belongsTo('App\Post');
59 |     }
60 |     
61 | - app/Comment.php
62 |     ```php
63 |     public function comments()
64 |     {
65 |         return $this->hasMany('App\Comment');
66 |     }
67 | 
68 |     
69 | 


--------------------------------------------------------------------------------
/article_stuff/markdown/part2.md:
--------------------------------------------------------------------------------
  1 | # Passos para a parte 2 do artigo
  2 | 
  3 | ## Remodelar o DER
  4 | - Gerar o novo diagrama
  5 | - Exportar para PNG
  6 | - Adicionar os arquivos de modelagem ao repositório
  7 | 
  8 | ## Criar o model Authors
  9 | - php artisan make:model Author -crmf
 10 | - Colocar as colunas na tabela authors em database/migrations/create_authors_table.php
 11 |     ```php
 12 |     public function up()
 13 |     {
 14 |         Schema::create('authors', function (Blueprint $table) {
 15 |             $table->increments('id');
 16 |             $table->string('name');
 17 |             $table->string('email');
 18 |             $table->string('bio')->nullable();
 19 |             $table->timestamps();
 20 |         });
 21 |     }```
 22 | 
 23 | ## Adicionar o ID do autor ao Post
 24 | - php artisan make:migration add_author_id_to_posts --table=posts
 25 | - Colocar a coluna de chave estrangeira em database/migrations/add_author_id_to_posts.php
 26 |     ```php
 27 |     public function up()
 28 |     {
 29 |         Schema::table('posts', function (Blueprint $table) {
 30 |             $table->integer('author_id')->unsigned();
 31 | 
 32 |             $table->foreign('author_id')->references('id')->on('authors');
 33 |         });
 34 |     }
 35 | 
 36 |     /**
 37 |      * Reverse the migrations.
 38 |      *
 39 |      * @return void
 40 |      */
 41 |     public function down()
 42 |     {
 43 |         Schema::table('posts', function (Blueprint $table) {
 44 |             $table->dropColumn('author_id');
 45 |         });
 46 |     }
 47 |     ```
 48 | 
 49 | ## Rodar as migrations
 50 | - Antes de rodar as migrations, temos que dar refresh no banco de dados, pois podem existir dados que impediriam a adição de novas chaves estrangeiras (PDOException::("SQLSTATE[23000]):
 51 |     - php artisan migrate:refresh
 52 | - php artisan migrate
 53 | 
 54 | ## Adicionar os relacionamentos
 55 | - app\Post.php
 56 |     
 57 |     ```php
 58 |     class Post extends Model
 59 |     {
 60 |         public function comments()
 61 |         {
 62 |             return $this->hasMany('App\Comment');
 63 |         }
 64 | 
 65 |         public function author()
 66 |         {
 67 |             return $this->belongsTo('App\Author');
 68 |         }
 69 |     }
 70 |     ```
 71 | - app/Author.php
 72 | 
 73 |     ```php
 74 |     class Author extends Model
 75 |     {
 76 |         public function posts()
 77 |         {
 78 |             return $this->hasMany('App\Post');
 79 |         }
 80 |         public function comments()
 81 |         {
 82 |             return $this->hasManyThrough('App\Comment', 'App\Post');
 83 |         }
 84 |     }
 85 |     ```
 86 | 
 87 | ## Testar o banco de dados no Tinker
 88 | - php artisan tinker
 89 |     - $author = new Author
 90 |     - $author->name = 'Leandro Ramos'
 91 |     - $author->email = 'leandroramos@usp.br'
 92 |     - $author->save()
 93 |     - $post = new Post
 94 |     - $post->title = 'Um Grande Post!'
 95 |     - $post->content = 'Um excelente texto explicando sobre uma grande novidade'
 96 |     - $post->author_id = 1
 97 |     - $post = new Post
 98 |     - $post->title = 'Segundo Grande Post!'
 99 |     - $post->content = 'Segundo texto espetacular sobre um grande post.'
100 |     - $post->author_id = 1
101 |     - $post = new Post
102 |     - $post->title = 'Um Grande Post!'
103 |     - $post->content = 'Um excelente texto explicando sobre uma grande novidade'
104 |     - $post->author_id = 1 
105 |     - $post->save()
106 |     - $post = new Post
107 |     - $post->title = 'Segundo Grande Post!'
108 |     - $post->content = 'Segundo texto espetacular sobre um grande post.'
109 |     - $post->author_id = 1 
110 |     - $post->save()
111 |     - $comment = new Comment
112 |     - $comment->author_email = 'comentador@site.com'
113 |     - $comment->content = 'Mas que post sensacional!'
114 |     - $comment->post_id = 1
115 |     - $comment->save()
116 |     - $comment = new Comment
117 |     - $comment->author_email = 'oriboncina@site.com'
118 |     - $comment->content = 'Sei não... estás enganado!!'
119 |     - $comment->post_id = 1
120 |     - $comment->save()
121 |     - $comment = new Comment
122 |     - $comment->author_email = 'eu@site.com'
123 |     - $comment->content = 'Estão faltando alguns links no post.'
124 |     - $comment->post_id = 1
125 |     - $comment->save()
126 |     - $comment = new Comment
127 |     - $comment->author_email = 'eu@site.com'
128 |     - $comment->content = 'Obrigado, ajudou muito.'
129 |     - $comment->post_id = 2
130 |     - $comment->save()
131 |     - 
132 |     - Testes:
133 |         - $author = Author::first()
134 |         - $author->posts
135 |         - $author->comments
136 |         - $author->comments->where('post_id', '2')
137 |         - $comment = Comment::first()
138 |         - $comment->post
139 |         - $comment->post->author
140 |         - $comment->post->author->name
141 |  
142 | 
143 | 


--------------------------------------------------------------------------------
/article_stuff/markdown/part3.md:
--------------------------------------------------------------------------------
 1 | # Parte 3 - Factories
 2 | 
 3 | ## Criar as factories
 4 |     - php artisan make:factory AuthorFactory --model="App\\Author"
 5 |     - php artisan make:factory PostFactory --model="App\\Post"
 6 |     - php artisan make:factory CommentFactory --model="App\\Comment"
 7 | 
 8 | ## Código das factories
 9 |     - AuthorFactory
10 |         ```php
11 |         <?php
12 | 
13 |         use Faker\Generator as Faker;
14 | 
15 |         $factory->define(App\Author::class, function (Faker $faker) {
16 |             return [
17 |                 'name'  => $faker->name,
18 |                 'email' => $faker->unique()->safeEmail,
19 |                 'bio'   => $faker->paragraph(1),
20 |             ];
21 |         });
22 |         ```
23 |     - PostFactory
24 |         ```php
25 |         <?php
26 | 
27 |         use App\Author;
28 |         use Faker\Generator as Faker;
29 | 
30 |         $factory->define(App\Post::class, function (Faker $faker) {
31 |             return [
32 |                 'title'     => $faker->sentence(4),
33 |                 'content'   => $faker->paragraph(4),
34 |                 
35 |                 'author_id' => function () {
36 |                     return Author::orderByRaw("RAND()")
37 |                         ->take(1)
38 |                         ->first()
39 |                         ->id;
40 |                 }
41 |             ];
42 |         });
43 |         ```
44 |     - CommentFactory
45 |         ```php
46 |         <?php
47 | 
48 |         use App\Post;
49 |         use Faker\Generator as Faker;
50 | 
51 |         $factory->define(App\Comment::class, function (Faker $faker) {
52 |             return [
53 |                 'author_email'  => $faker->unique()->safeEmail,
54 |                 'content'       => $faker->paragraph(2),
55 | 
56 |                 'post_id' => function () {
57 |                     return Post::orderByRaw("RAND()")
58 |                         ->take(1)
59 |                         ->first()
60 |                         ->id;
61 |                 }
62 |             ];
63 |         });
64 |         ```
65 | 
66 | ## Código do DatabaseSeeder
67 |     ```php
68 |     <?php
69 | 
70 |     use Illuminate\Database\Seeder;
71 | 
72 |     class DatabaseSeeder extends Seeder
73 |     {
74 |         /**
75 |          * Run the database seeds.
76 |          *
77 |          * @return void
78 |          */
79 |         public function run()
80 |         {
81 |             // $this->call(UsersTableSeeder::class);
82 |             echo "Criando 10 autores...\n";
83 |             factory(App\Author::class, 10)->create();
84 | 
85 |             echo "Criando 36 posts relacionados a autores aleatórios...\n";
86 |             factory(App\Post::class, 36)->create();
87 | 
88 |             echo "Criando 67 comentários relacionados a posts aleatórios...\n";
89 |             factory(App\Comment::class, 67)->create();
90 |         }
91 |     }
92 |     ```
93 | 
94 | ## Links de referência
95 | - [Laravel 5.6 - Database Testing](https://laravel.com/docs/5.6/database-testing)
96 | - [Faker - Documentação (e repositório)](https://github.com/fzaninotto/Faker)
97 | 


--------------------------------------------------------------------------------
/article_stuff/model/laravel_basico_part1.mwb:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/josuearaujomoreira/back_teste_rallw/16c94dd30fda81091e42eacee48ce2aed45f39b8/article_stuff/model/laravel_basico_part1.mwb


--------------------------------------------------------------------------------
/article_stuff/model/laravel_basico_part1.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/josuearaujomoreira/back_teste_rallw/16c94dd30fda81091e42eacee48ce2aed45f39b8/article_stuff/model/laravel_basico_part1.png


--------------------------------------------------------------------------------
/article_stuff/model/laravel_basico_part2.mwb:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/josuearaujomoreira/back_teste_rallw/16c94dd30fda81091e42eacee48ce2aed45f39b8/article_stuff/model/laravel_basico_part2.mwb


--------------------------------------------------------------------------------
/article_stuff/model/laravel_basico_part2.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/josuearaujomoreira/back_teste_rallw/16c94dd30fda81091e42eacee48ce2aed45f39b8/article_stuff/model/laravel_basico_part2.png


--------------------------------------------------------------------------------
/artisan:
--------------------------------------------------------------------------------
 1 | #!/usr/bin/env php
 2 | <?php
 3 | 
 4 | define('LARAVEL_START', microtime(true));
 5 | 
 6 | /*
 7 | |--------------------------------------------------------------------------
 8 | | Register The Auto Loader
 9 | |--------------------------------------------------------------------------
10 | |
11 | | Composer provides a convenient, automatically generated class loader
12 | | for our application. We just need to utilize it! We'll require it
13 | | into the script here so that we do not have to worry about the
14 | | loading of any our classes "manually". Feels great to relax.
15 | |
16 | */
17 | 
18 | require __DIR__.'/vendor/autoload.php';
19 | 
20 | $app = require_once __DIR__.'/bootstrap/app.php';
21 | 
22 | /*
23 | |--------------------------------------------------------------------------
24 | | Run The Artisan Application
25 | |--------------------------------------------------------------------------
26 | |
27 | | When we run the console application, the current CLI command will be
28 | | executed in this console and the response sent back to a terminal
29 | | or another output device for the developers. Here goes nothing!
30 | |
31 | */
32 | 
33 | $kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
34 | 
35 | $status = $kernel->handle(
36 |     $input = new Symfony\Component\Console\Input\ArgvInput,
37 |     new Symfony\Component\Console\Output\ConsoleOutput
38 | );
39 | 
40 | /*
41 | |--------------------------------------------------------------------------
42 | | Shutdown The Application
43 | |--------------------------------------------------------------------------
44 | |
45 | | Once Artisan has finished running, we will fire off the shutdown events
46 | | so that any final work may be done by the application before we shut
47 | | down the process. This is the last thing to happen to the request.
48 | |
49 | */
50 | 
51 | $kernel->terminate($input, $status);
52 | 
53 | exit($status);
54 | 


--------------------------------------------------------------------------------
/bootstrap/app.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | /*
 4 | |--------------------------------------------------------------------------
 5 | | Create The Application
 6 | |--------------------------------------------------------------------------
 7 | |
 8 | | The first thing we will do is create a new Laravel application instance
 9 | | which serves as the "glue" for all the components of Laravel, and is
10 | | the IoC container for the system binding all of the various parts.
11 | |
12 | */
13 | 
14 | $app = new Illuminate\Foundation\Application(
15 |     realpath(__DIR__.'/../')
16 | );
17 | 
18 | /*
19 | |--------------------------------------------------------------------------
20 | | Bind Important Interfaces
21 | |--------------------------------------------------------------------------
22 | |
23 | | Next, we need to bind some important interfaces into the container so
24 | | we will be able to resolve them when needed. The kernels serve the
25 | | incoming requests to this application from both the web and CLI.
26 | |
27 | */
28 | 
29 | $app->singleton(
30 |     Illuminate\Contracts\Http\Kernel::class,
31 |     App\Http\Kernel::class
32 | );
33 | 
34 | $app->singleton(
35 |     Illuminate\Contracts\Console\Kernel::class,
36 |     App\Console\Kernel::class
37 | );
38 | 
39 | $app->singleton(
40 |     Illuminate\Contracts\Debug\ExceptionHandler::class,
41 |     App\Exceptions\Handler::class
42 | );
43 | 
44 | /*
45 | |--------------------------------------------------------------------------
46 | | Return The Application
47 | |--------------------------------------------------------------------------
48 | |
49 | | This script returns the application instance. The instance is given to
50 | | the calling script so we can separate the building of the instances
51 | | from the actual running of the application and sending responses.
52 | |
53 | */
54 | 
55 | return $app;
56 | 


--------------------------------------------------------------------------------
/bootstrap/cache/.gitignore:
--------------------------------------------------------------------------------
1 | *
2 | !.gitignore
3 | 


--------------------------------------------------------------------------------
/composer.json:
--------------------------------------------------------------------------------
 1 | {
 2 |     "name": "laravel/laravel",
 3 |     "description": "The Laravel Framework.",
 4 |     "keywords": ["framework", "laravel"],
 5 |     "license": "MIT",
 6 |     "type": "project",
 7 |     "require": {
 8 |         "php": ">=7.1.3",
 9 |         "fideloper/proxy": "~4.0",
10 |         "laravel/framework": "5.6.*",
11 |         "laravel/tinker": "~1.0"
12 |     },
13 |     "require-dev": {
14 |         "filp/whoops": "~2.0",
15 |         "nunomaduro/collision": "~1.1",
16 |         "fzaninotto/faker": "~1.4",
17 |         "mockery/mockery": "~1.0",
18 |         "phpunit/phpunit": "~7.0",
19 |         "symfony/thanks": "^1.0"
20 |     },
21 |     "autoload": {
22 |         "classmap": [
23 |             "database/seeds",
24 |             "database/factories"
25 |         ],
26 |         "psr-4": {
27 |             "App\\": "app/"
28 |         }
29 |     },
30 |     "autoload-dev": {
31 |         "psr-4": {
32 |             "Tests\\": "tests/"
33 |         }
34 |     },
35 |     "extra": {
36 |         "laravel": {
37 |             "dont-discover": [
38 |             ]
39 |         }
40 |     },
41 |     "scripts": {
42 |         "post-root-package-install": [
43 |             "@php -r \"file_exists('.env') || copy('.env.example', '.env');\""
44 |         ],
45 |         "post-create-project-cmd": [
46 |             "@php artisan key:generate"
47 |         ],
48 |         "post-autoload-dump": [
49 |             "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
50 |             "@php artisan package:discover"
51 |         ]
52 |     },
53 |     "config": {
54 |         "preferred-install": "dist",
55 |         "sort-packages": true,
56 |         "optimize-autoloader": true
57 |     },
58 |     "minimum-stability": "dev",
59 |     "prefer-stable": true
60 | }
61 | 


--------------------------------------------------------------------------------
/config/auth.php:
--------------------------------------------------------------------------------
  1 | <?php
  2 | 
  3 | return [
  4 | 
  5 |     /*
  6 |     |--------------------------------------------------------------------------
  7 |     | Authentication Defaults
  8 |     |--------------------------------------------------------------------------
  9 |     |
 10 |     | This option controls the default authentication "guard" and password
 11 |     | reset options for your application. You may change these defaults
 12 |     | as required, but they're a perfect start for most applications.
 13 |     |
 14 |     */
 15 | 
 16 |     'defaults' => [
 17 |         'guard' => 'web',
 18 |         'passwords' => 'users',
 19 |     ],
 20 | 
 21 |     /*
 22 |     |--------------------------------------------------------------------------
 23 |     | Authentication Guards
 24 |     |--------------------------------------------------------------------------
 25 |     |
 26 |     | Next, you may define every authentication guard for your application.
 27 |     | Of course, a great default configuration has been defined for you
 28 |     | here which uses session storage and the Eloquent user provider.
 29 |     |
 30 |     | All authentication drivers have a user provider. This defines how the
 31 |     | users are actually retrieved out of your database or other storage
 32 |     | mechanisms used by this application to persist your user's data.
 33 |     |
 34 |     | Supported: "session", "token"
 35 |     |
 36 |     */
 37 | 
 38 |     'guards' => [
 39 |         'web' => [
 40 |             'driver' => 'session',
 41 |             'provider' => 'users',
 42 |         ],
 43 | 
 44 |         'api' => [
 45 |             'driver' => 'token',
 46 |             'provider' => 'users',
 47 |         ],
 48 |     ],
 49 | 
 50 |     /*
 51 |     |--------------------------------------------------------------------------
 52 |     | User Providers
 53 |     |--------------------------------------------------------------------------
 54 |     |
 55 |     | All authentication drivers have a user provider. This defines how the
 56 |     | users are actually retrieved out of your database or other storage
 57 |     | mechanisms used by this application to persist your user's data.
 58 |     |
 59 |     | If you have multiple user tables or models you may configure multiple
 60 |     | sources which represent each model / table. These sources may then
 61 |     | be assigned to any extra authentication guards you have defined.
 62 |     |
 63 |     | Supported: "database", "eloquent"
 64 |     |
 65 |     */
 66 | 
 67 |     'providers' => [
 68 |         'users' => [
 69 |             'driver' => 'eloquent',
 70 |             'model' => App\User::class,
 71 |         ],
 72 | 
 73 |         // 'users' => [
 74 |         //     'driver' => 'database',
 75 |         //     'table' => 'users',
 76 |         // ],
 77 |     ],
 78 | 
 79 |     /*
 80 |     |--------------------------------------------------------------------------
 81 |     | Resetting Passwords
 82 |     |--------------------------------------------------------------------------
 83 |     |
 84 |     | You may specify multiple password reset configurations if you have more
 85 |     | than one user table or model in the application and you want to have
 86 |     | separate password reset settings based on the specific user types.
 87 |     |
 88 |     | The expire time is the number of minutes that the reset token should be
 89 |     | considered valid. This security feature keeps tokens short-lived so
 90 |     | they have less time to be guessed. You may change this as needed.
 91 |     |
 92 |     */
 93 | 
 94 |     'passwords' => [
 95 |         'users' => [
 96 |             'provider' => 'users',
 97 |             'table' => 'password_resets',
 98 |             'expire' => 60,
 99 |         ],
100 |     ],
101 | 
102 | ];
103 | 


--------------------------------------------------------------------------------
/config/broadcasting.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Default Broadcaster
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | This option controls the default broadcaster that will be used by the
11 |     | framework when an event needs to be broadcast. You may set this to
12 |     | any of the connections defined in the "connections" array below.
13 |     |
14 |     | Supported: "pusher", "redis", "log", "null"
15 |     |
16 |     */
17 | 
18 |     'default' => env('BROADCAST_DRIVER', 'null'),
19 | 
20 |     /*
21 |     |--------------------------------------------------------------------------
22 |     | Broadcast Connections
23 |     |--------------------------------------------------------------------------
24 |     |
25 |     | Here you may define all of the broadcast connections that will be used
26 |     | to broadcast events to other systems or over websockets. Samples of
27 |     | each available type of connection are provided inside this array.
28 |     |
29 |     */
30 | 
31 |     'connections' => [
32 | 
33 |         'pusher' => [
34 |             'driver' => 'pusher',
35 |             'key' => env('PUSHER_APP_KEY'),
36 |             'secret' => env('PUSHER_APP_SECRET'),
37 |             'app_id' => env('PUSHER_APP_ID'),
38 |             'options' => [
39 |                 'cluster' => env('PUSHER_APP_CLUSTER'),
40 |                 'encrypted' => true,
41 |             ],
42 |         ],
43 | 
44 |         'redis' => [
45 |             'driver' => 'redis',
46 |             'connection' => 'default',
47 |         ],
48 | 
49 |         'log' => [
50 |             'driver' => 'log',
51 |         ],
52 | 
53 |         'null' => [
54 |             'driver' => 'null',
55 |         ],
56 | 
57 |     ],
58 | 
59 | ];
60 | 


--------------------------------------------------------------------------------
/config/cache.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Default Cache Store
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | This option controls the default cache connection that gets used while
11 |     | using this caching library. This connection is used when another is
12 |     | not explicitly specified when executing a given caching function.
13 |     |
14 |     | Supported: "apc", "array", "database", "file", "memcached", "redis"
15 |     |
16 |     */
17 | 
18 |     'default' => env('CACHE_DRIVER', 'file'),
19 | 
20 |     /*
21 |     |--------------------------------------------------------------------------
22 |     | Cache Stores
23 |     |--------------------------------------------------------------------------
24 |     |
25 |     | Here you may define all of the cache "stores" for your application as
26 |     | well as their drivers. You may even define multiple stores for the
27 |     | same cache driver to group types of items stored in your caches.
28 |     |
29 |     */
30 | 
31 |     'stores' => [
32 | 
33 |         'apc' => [
34 |             'driver' => 'apc',
35 |         ],
36 | 
37 |         'array' => [
38 |             'driver' => 'array',
39 |         ],
40 | 
41 |         'database' => [
42 |             'driver' => 'database',
43 |             'table' => 'cache',
44 |             'connection' => null,
45 |         ],
46 | 
47 |         'file' => [
48 |             'driver' => 'file',
49 |             'path' => storage_path('framework/cache/data'),
50 |         ],
51 | 
52 |         'memcached' => [
53 |             'driver' => 'memcached',
54 |             'persistent_id' => env('MEMCACHED_PERSISTENT_ID'),
55 |             'sasl' => [
56 |                 env('MEMCACHED_USERNAME'),
57 |                 env('MEMCACHED_PASSWORD'),
58 |             ],
59 |             'options' => [
60 |                 // Memcached::OPT_CONNECT_TIMEOUT  => 2000,
61 |             ],
62 |             'servers' => [
63 |                 [
64 |                     'host' => env('MEMCACHED_HOST', '127.0.0.1'),
65 |                     'port' => env('MEMCACHED_PORT', 11211),
66 |                     'weight' => 100,
67 |                 ],
68 |             ],
69 |         ],
70 | 
71 |         'redis' => [
72 |             'driver' => 'redis',
73 |             'connection' => 'default',
74 |         ],
75 | 
76 |     ],
77 | 
78 |     /*
79 |     |--------------------------------------------------------------------------
80 |     | Cache Key Prefix
81 |     |--------------------------------------------------------------------------
82 |     |
83 |     | When utilizing a RAM based store such as APC or Memcached, there might
84 |     | be other applications utilizing the same cache. So, we'll specify a
85 |     | value to get prefixed to all our keys so we can avoid collisions.
86 |     |
87 |     */
88 | 
89 |     'prefix' => env(
90 |         'CACHE_PREFIX',
91 |         str_slug(env('APP_NAME', 'laravel'), '_').'_cache'
92 |     ),
93 | 
94 | ];
95 | 


--------------------------------------------------------------------------------
/config/database.php:
--------------------------------------------------------------------------------
  1 | <?php
  2 | 
  3 | return [
  4 | 
  5 |     /*
  6 |     |--------------------------------------------------------------------------
  7 |     | Default Database Connection Name
  8 |     |--------------------------------------------------------------------------
  9 |     |
 10 |     | Here you may specify which of the database connections below you wish
 11 |     | to use as your default connection for all database work. Of course
 12 |     | you may use many connections at once using the Database library.
 13 |     |
 14 |     */
 15 | 
 16 |     'default' => env('DB_CONNECTION', 'mysql'),
 17 | 
 18 |     /*
 19 |     |--------------------------------------------------------------------------
 20 |     | Database Connections
 21 |     |--------------------------------------------------------------------------
 22 |     |
 23 |     | Here are each of the database connections setup for your application.
 24 |     | Of course, examples of configuring each database platform that is
 25 |     | supported by Laravel is shown below to make development simple.
 26 |     |
 27 |     |
 28 |     | All database work in Laravel is done through the PHP PDO facilities
 29 |     | so make sure you have the driver for your particular database of
 30 |     | choice installed on your machine before you begin development.
 31 |     |
 32 |     */
 33 | 
 34 |     'connections' => [
 35 | 
 36 |         'sqlite' => [
 37 |             'driver' => 'sqlite',
 38 |             'database' => env('DB_DATABASE', database_path('database.sqlite')),
 39 |             'prefix' => '',
 40 |         ],
 41 | 
 42 |         'mysql' => [
 43 |             'driver' => 'mysql',
 44 |             'host' => env('DB_HOST', '127.0.0.1'),
 45 |             'port' => env('DB_PORT', '3306'),
 46 |             'database' => env('DB_DATABASE', 'forge'),
 47 |             'username' => env('DB_USERNAME', 'forge'),
 48 |             'password' => env('DB_PASSWORD', ''),
 49 |             'unix_socket' => env('DB_SOCKET', ''),
 50 |             'charset' => 'utf8mb4',
 51 |             'collation' => 'utf8mb4_unicode_ci',
 52 |             'prefix' => '',
 53 |             'strict' => true,
 54 |             'engine' => null,
 55 |         ],
 56 | 
 57 |         'pgsql' => [
 58 |             'driver' => 'pgsql',
 59 |             'host' => env('DB_HOST', '127.0.0.1'),
 60 |             'port' => env('DB_PORT', '5432'),
 61 |             'database' => env('DB_DATABASE', 'forge'),
 62 |             'username' => env('DB_USERNAME', 'forge'),
 63 |             'password' => env('DB_PASSWORD', ''),
 64 |             'charset' => 'utf8',
 65 |             'prefix' => '',
 66 |             'schema' => 'public',
 67 |             'sslmode' => 'prefer',
 68 |         ],
 69 | 
 70 |         'sqlsrv' => [
 71 |             'driver' => 'sqlsrv',
 72 |             'host' => env('DB_HOST', 'localhost'),
 73 |             'port' => env('DB_PORT', '1433'),
 74 |             'database' => env('DB_DATABASE', 'forge'),
 75 |             'username' => env('DB_USERNAME', 'forge'),
 76 |             'password' => env('DB_PASSWORD', ''),
 77 |             'charset' => 'utf8',
 78 |             'prefix' => '',
 79 |         ],
 80 | 
 81 |     ],
 82 | 
 83 |     /*
 84 |     |--------------------------------------------------------------------------
 85 |     | Migration Repository Table
 86 |     |--------------------------------------------------------------------------
 87 |     |
 88 |     | This table keeps track of all the migrations that have already run for
 89 |     | your application. Using this information, we can determine which of
 90 |     | the migrations on disk haven't actually been run in the database.
 91 |     |
 92 |     */
 93 | 
 94 |     'migrations' => 'migrations',
 95 | 
 96 |     /*
 97 |     |--------------------------------------------------------------------------
 98 |     | Redis Databases
 99 |     |--------------------------------------------------------------------------
100 |     |
101 |     | Redis is an open source, fast, and advanced key-value store that also
102 |     | provides a richer set of commands than a typical key-value systems
103 |     | such as APC or Memcached. Laravel makes it easy to dig right in.
104 |     |
105 |     */
106 | 
107 |     'redis' => [
108 | 
109 |         'client' => 'predis',
110 | 
111 |         'default' => [
112 |             'host' => env('REDIS_HOST', '127.0.0.1'),
113 |             'password' => env('REDIS_PASSWORD', null),
114 |             'port' => env('REDIS_PORT', 6379),
115 |             'database' => 0,
116 |         ],
117 | 
118 |     ],
119 | 
120 | ];
121 | 


--------------------------------------------------------------------------------
/config/filesystems.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Default Filesystem Disk
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | Here you may specify the default filesystem disk that should be used
11 |     | by the framework. The "local" disk, as well as a variety of cloud
12 |     | based disks are available to your application. Just store away!
13 |     |
14 |     */
15 | 
16 |     'default' => env('FILESYSTEM_DRIVER', 'local'),
17 | 
18 |     /*
19 |     |--------------------------------------------------------------------------
20 |     | Default Cloud Filesystem Disk
21 |     |--------------------------------------------------------------------------
22 |     |
23 |     | Many applications store files both locally and in the cloud. For this
24 |     | reason, you may specify a default "cloud" driver here. This driver
25 |     | will be bound as the Cloud disk implementation in the container.
26 |     |
27 |     */
28 | 
29 |     'cloud' => env('FILESYSTEM_CLOUD', 's3'),
30 | 
31 |     /*
32 |     |--------------------------------------------------------------------------
33 |     | Filesystem Disks
34 |     |--------------------------------------------------------------------------
35 |     |
36 |     | Here you may configure as many filesystem "disks" as you wish, and you
37 |     | may even configure multiple disks of the same driver. Defaults have
38 |     | been setup for each driver as an example of the required options.
39 |     |
40 |     | Supported Drivers: "local", "ftp", "s3", "rackspace"
41 |     |
42 |     */
43 | 
44 |     'disks' => [
45 | 
46 |         'local' => [
47 |             'driver' => 'local',
48 |             'root' => storage_path('app'),
49 |         ],
50 | 
51 |         'public' => [
52 |             'driver' => 'local',
53 |             'root' => storage_path('app/public'),
54 |             'url' => env('APP_URL').'/storage',
55 |             'visibility' => 'public',
56 |         ],
57 | 
58 |         's3' => [
59 |             'driver' => 's3',
60 |             'key' => env('AWS_ACCESS_KEY_ID'),
61 |             'secret' => env('AWS_SECRET_ACCESS_KEY'),
62 |             'region' => env('AWS_DEFAULT_REGION'),
63 |             'bucket' => env('AWS_BUCKET'),
64 |             'url' => env('AWS_URL'),
65 |         ],
66 | 
67 |     ],
68 | 
69 | ];
70 | 


--------------------------------------------------------------------------------
/config/hashing.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Default Hash Driver
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | This option controls the default hash driver that will be used to hash
11 |     | passwords for your application. By default, the bcrypt algorithm is
12 |     | used; however, you remain free to modify this option if you wish.
13 |     |
14 |     | Supported: "bcrypt", "argon"
15 |     |
16 |     */
17 | 
18 |     'driver' => 'bcrypt',
19 | 
20 | ];
21 | 


--------------------------------------------------------------------------------
/config/logging.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Default Log Channel
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | This option defines the default log channel that gets used when writing
11 |     | messages to the logs. The name specified in this option should match
12 |     | one of the channels defined in the "channels" configuration array.
13 |     |
14 |     */
15 | 
16 |     'default' => env('LOG_CHANNEL', 'stack'),
17 | 
18 |     /*
19 |     |--------------------------------------------------------------------------
20 |     | Log Channels
21 |     |--------------------------------------------------------------------------
22 |     |
23 |     | Here you may configure the log channels for your application. Out of
24 |     | the box, Laravel uses the Monolog PHP logging library. This gives
25 |     | you a variety of powerful log handlers / formatters to utilize.
26 |     |
27 |     | Available Drivers: "single", "daily", "slack", "syslog",
28 |     |                    "errorlog", "custom", "stack"
29 |     |
30 |     */
31 | 
32 |     'channels' => [
33 |         'stack' => [
34 |             'driver' => 'stack',
35 |             'channels' => ['single'],
36 |         ],
37 | 
38 |         'single' => [
39 |             'driver' => 'single',
40 |             'path' => storage_path('logs/laravel.log'),
41 |             'level' => 'debug',
42 |         ],
43 | 
44 |         'daily' => [
45 |             'driver' => 'daily',
46 |             'path' => storage_path('logs/laravel.log'),
47 |             'level' => 'debug',
48 |             'days' => 7,
49 |         ],
50 | 
51 |         'slack' => [
52 |             'driver' => 'slack',
53 |             'url' => env('LOG_SLACK_WEBHOOK_URL'),
54 |             'username' => 'Laravel Log',
55 |             'emoji' => ':boom:',
56 |             'level' => 'critical',
57 |         ],
58 | 
59 |         'syslog' => [
60 |             'driver' => 'syslog',
61 |             'level' => 'debug',
62 |         ],
63 | 
64 |         'errorlog' => [
65 |             'driver' => 'errorlog',
66 |             'level' => 'debug',
67 |         ],
68 |     ],
69 | 
70 | ];
71 | 


--------------------------------------------------------------------------------
/config/mail.php:
--------------------------------------------------------------------------------
  1 | <?php
  2 | 
  3 | return [
  4 | 
  5 |     /*
  6 |     |--------------------------------------------------------------------------
  7 |     | Mail Driver
  8 |     |--------------------------------------------------------------------------
  9 |     |
 10 |     | Laravel supports both SMTP and PHP's "mail" function as drivers for the
 11 |     | sending of e-mail. You may specify which one you're using throughout
 12 |     | your application here. By default, Laravel is setup for SMTP mail.
 13 |     |
 14 |     | Supported: "smtp", "sendmail", "mailgun", "mandrill", "ses",
 15 |     |            "sparkpost", "log", "array"
 16 |     |
 17 |     */
 18 | 
 19 |     'driver' => env('MAIL_DRIVER', 'smtp'),
 20 | 
 21 |     /*
 22 |     |--------------------------------------------------------------------------
 23 |     | SMTP Host Address
 24 |     |--------------------------------------------------------------------------
 25 |     |
 26 |     | Here you may provide the host address of the SMTP server used by your
 27 |     | applications. A default option is provided that is compatible with
 28 |     | the Mailgun mail service which will provide reliable deliveries.
 29 |     |
 30 |     */
 31 | 
 32 |     'host' => env('MAIL_HOST', 'smtp.mailgun.org'),
 33 | 
 34 |     /*
 35 |     |--------------------------------------------------------------------------
 36 |     | SMTP Host Port
 37 |     |--------------------------------------------------------------------------
 38 |     |
 39 |     | This is the SMTP port used by your application to deliver e-mails to
 40 |     | users of the application. Like the host we have set this value to
 41 |     | stay compatible with the Mailgun e-mail application by default.
 42 |     |
 43 |     */
 44 | 
 45 |     'port' => env('MAIL_PORT', 587),
 46 | 
 47 |     /*
 48 |     |--------------------------------------------------------------------------
 49 |     | Global "From" Address
 50 |     |--------------------------------------------------------------------------
 51 |     |
 52 |     | You may wish for all e-mails sent by your application to be sent from
 53 |     | the same address. Here, you may specify a name and address that is
 54 |     | used globally for all e-mails that are sent by your application.
 55 |     |
 56 |     */
 57 | 
 58 |     'from' => [
 59 |         'address' => env('MAIL_FROM_ADDRESS', 'hello@example.com'),
 60 |         'name' => env('MAIL_FROM_NAME', 'Example'),
 61 |     ],
 62 | 
 63 |     /*
 64 |     |--------------------------------------------------------------------------
 65 |     | E-Mail Encryption Protocol
 66 |     |--------------------------------------------------------------------------
 67 |     |
 68 |     | Here you may specify the encryption protocol that should be used when
 69 |     | the application send e-mail messages. A sensible default using the
 70 |     | transport layer security protocol should provide great security.
 71 |     |
 72 |     */
 73 | 
 74 |     'encryption' => env('MAIL_ENCRYPTION', 'tls'),
 75 | 
 76 |     /*
 77 |     |--------------------------------------------------------------------------
 78 |     | SMTP Server Username
 79 |     |--------------------------------------------------------------------------
 80 |     |
 81 |     | If your SMTP server requires a username for authentication, you should
 82 |     | set it here. This will get used to authenticate with your server on
 83 |     | connection. You may also set the "password" value below this one.
 84 |     |
 85 |     */
 86 | 
 87 |     'username' => env('MAIL_USERNAME'),
 88 | 
 89 |     'password' => env('MAIL_PASSWORD'),
 90 | 
 91 |     /*
 92 |     |--------------------------------------------------------------------------
 93 |     | Sendmail System Path
 94 |     |--------------------------------------------------------------------------
 95 |     |
 96 |     | When using the "sendmail" driver to send e-mails, we will need to know
 97 |     | the path to where Sendmail lives on this server. A default path has
 98 |     | been provided here, which will work well on most of your systems.
 99 |     |
100 |     */
101 | 
102 |     'sendmail' => '/usr/sbin/sendmail -bs',
103 | 
104 |     /*
105 |     |--------------------------------------------------------------------------
106 |     | Markdown Mail Settings
107 |     |--------------------------------------------------------------------------
108 |     |
109 |     | If you are using Markdown based email rendering, you may configure your
110 |     | theme and component paths here, allowing you to customize the design
111 |     | of the emails. Or, you may simply stick with the Laravel defaults!
112 |     |
113 |     */
114 | 
115 |     'markdown' => [
116 |         'theme' => 'default',
117 | 
118 |         'paths' => [
119 |             resource_path('views/vendor/mail'),
120 |         ],
121 |     ],
122 | 
123 | ];
124 | 


--------------------------------------------------------------------------------
/config/queue.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Default Queue Driver
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | Laravel's queue API supports an assortment of back-ends via a single
11 |     | API, giving you convenient access to each back-end using the same
12 |     | syntax for each one. Here you may set the default queue driver.
13 |     |
14 |     | Supported: "sync", "database", "beanstalkd", "sqs", "redis", "null"
15 |     |
16 |     */
17 | 
18 |     'default' => env('QUEUE_DRIVER', 'sync'),
19 | 
20 |     /*
21 |     |--------------------------------------------------------------------------
22 |     | Queue Connections
23 |     |--------------------------------------------------------------------------
24 |     |
25 |     | Here you may configure the connection information for each server that
26 |     | is used by your application. A default configuration has been added
27 |     | for each back-end shipped with Laravel. You are free to add more.
28 |     |
29 |     */
30 | 
31 |     'connections' => [
32 | 
33 |         'sync' => [
34 |             'driver' => 'sync',
35 |         ],
36 | 
37 |         'database' => [
38 |             'driver' => 'database',
39 |             'table' => 'jobs',
40 |             'queue' => 'default',
41 |             'retry_after' => 90,
42 |         ],
43 | 
44 |         'beanstalkd' => [
45 |             'driver' => 'beanstalkd',
46 |             'host' => 'localhost',
47 |             'queue' => 'default',
48 |             'retry_after' => 90,
49 |         ],
50 | 
51 |         'sqs' => [
52 |             'driver' => 'sqs',
53 |             'key' => env('SQS_KEY', 'your-public-key'),
54 |             'secret' => env('SQS_SECRET', 'your-secret-key'),
55 |             'prefix' => env('SQS_PREFIX', 'https://sqs.us-east-1.amazonaws.com/your-account-id'),
56 |             'queue' => env('SQS_QUEUE', 'your-queue-name'),
57 |             'region' => env('SQS_REGION', 'us-east-1'),
58 |         ],
59 | 
60 |         'redis' => [
61 |             'driver' => 'redis',
62 |             'connection' => 'default',
63 |             'queue' => 'default',
64 |             'retry_after' => 90,
65 |             'block_for' => null,
66 |         ],
67 | 
68 |     ],
69 | 
70 |     /*
71 |     |--------------------------------------------------------------------------
72 |     | Failed Queue Jobs
73 |     |--------------------------------------------------------------------------
74 |     |
75 |     | These options configure the behavior of failed queue job logging so you
76 |     | can control which database and table are used to store the jobs that
77 |     | have failed. You may change them to any database / table you wish.
78 |     |
79 |     */
80 | 
81 |     'failed' => [
82 |         'database' => env('DB_CONNECTION', 'mysql'),
83 |         'table' => 'failed_jobs',
84 |     ],
85 | 
86 | ];
87 | 


--------------------------------------------------------------------------------
/config/services.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Third Party Services
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | This file is for storing the credentials for third party services such
11 |     | as Stripe, Mailgun, SparkPost and others. This file provides a sane
12 |     | default location for this type of information, allowing packages
13 |     | to have a conventional place to find your various credentials.
14 |     |
15 |     */
16 | 
17 |     'mailgun' => [
18 |         'domain' => env('MAILGUN_DOMAIN'),
19 |         'secret' => env('MAILGUN_SECRET'),
20 |     ],
21 | 
22 |     'ses' => [
23 |         'key' => env('SES_KEY'),
24 |         'secret' => env('SES_SECRET'),
25 |         'region' => 'us-east-1',
26 |     ],
27 | 
28 |     'sparkpost' => [
29 |         'secret' => env('SPARKPOST_SECRET'),
30 |     ],
31 | 
32 |     'stripe' => [
33 |         'model' => App\User::class,
34 |         'key' => env('STRIPE_KEY'),
35 |         'secret' => env('STRIPE_SECRET'),
36 |     ],
37 | 
38 | ];
39 | 


--------------------------------------------------------------------------------
/config/view.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | View Storage Paths
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | Most templating systems load templates from disk. Here you may specify
11 |     | an array of paths that should be checked for your views. Of course
12 |     | the usual Laravel view path has already been registered for you.
13 |     |
14 |     */
15 | 
16 |     'paths' => [
17 |         resource_path('views'),
18 |     ],
19 | 
20 |     /*
21 |     |--------------------------------------------------------------------------
22 |     | Compiled View Path
23 |     |--------------------------------------------------------------------------
24 |     |
25 |     | This option determines where all the compiled Blade templates will be
26 |     | stored for your application. Typically, this is within the storage
27 |     | directory. However, as usual, you are free to change this value.
28 |     |
29 |     */
30 | 
31 |     'compiled' => realpath(storage_path('framework/views')),
32 | 
33 | ];
34 | 


--------------------------------------------------------------------------------
/database/.gitignore:
--------------------------------------------------------------------------------
1 | *.sqlite
2 | 


--------------------------------------------------------------------------------
/database/factories/AuthorFactory.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Faker\Generator as Faker;
 4 | 
 5 | $factory->define(App\Author::class, function (Faker $faker) {
 6 |     return [
 7 |         'name'  => $faker->name,
 8 |         'email' => $faker->unique()->safeEmail,
 9 |         'bio'   => $faker->paragraph(1),
10 |     ];
11 | });
12 | 


--------------------------------------------------------------------------------
/database/factories/CommentFactory.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use App\Post;
 4 | use Faker\Generator as Faker;
 5 | 
 6 | $factory->define(App\Comment::class, function (Faker $faker) {
 7 |     return [
 8 |         'author_email'  => $faker->unique()->safeEmail,
 9 |         'content'       => $faker->paragraph(2),
10 | 
11 |         'post_id' => function () {
12 |             return Post::orderByRaw("RAND()")
13 |                 ->take(1)
14 |                 ->first()
15 |                 ->id;
16 |         }
17 |     ];
18 | });
19 | 


--------------------------------------------------------------------------------
/database/factories/PostFactory.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use App\Author;
 4 | use Faker\Generator as Faker;
 5 | 
 6 | $factory->define(App\Post::class, function (Faker $faker) {
 7 |     return [
 8 |         'title'     => $faker->sentence(4),
 9 |         'content'   => $faker->paragraph(4),
10 |         
11 |         'author_id' => function () {
12 |             return Author::orderByRaw("RAND()")
13 |                 ->take(1)
14 |                 ->first()
15 |                 ->id;
16 |         }
17 |     ];
18 | });
19 | 


--------------------------------------------------------------------------------
/database/factories/UserFactory.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Faker\Generator as Faker;
 4 | 
 5 | /*
 6 | |--------------------------------------------------------------------------
 7 | | Model Factories
 8 | |--------------------------------------------------------------------------
 9 | |
10 | | This directory should contain each of the model factory definitions for
11 | | your application. Factories provide a convenient way to generate new
12 | | model instances for testing / seeding your application's database.
13 | |
14 | */
15 | 
16 | $factory->define(App\User::class, function (Faker $faker) {
17 |     return [
18 |         'name' => $faker->name,
19 |         'email' => $faker->unique()->safeEmail,
20 |         'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
21 |         'remember_token' => str_random(10),
22 |     ];
23 | });
24 | 


--------------------------------------------------------------------------------
/database/migrations/2014_10_12_000000_create_users_table.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Illuminate\Support\Facades\Schema;
 4 | use Illuminate\Database\Schema\Blueprint;
 5 | use Illuminate\Database\Migrations\Migration;
 6 | 
 7 | class CreateUsersTable extends Migration
 8 | {
 9 |     /**
10 |      * Run the migrations.
11 |      *
12 |      * @return void
13 |      */
14 |     public function up()
15 |     {
16 |         Schema::create('users', function (Blueprint $table) {
17 |             $table->increments('id');
18 |             $table->string('name');
19 |             $table->string('email')->unique();
20 |             $table->string('password');
21 |             $table->rememberToken();
22 |             $table->timestamps();
23 |         });
24 |     }
25 | 
26 |     /**
27 |      * Reverse the migrations.
28 |      *
29 |      * @return void
30 |      */
31 |     public function down()
32 |     {
33 |         Schema::dropIfExists('users');
34 |     }
35 | }
36 | 


--------------------------------------------------------------------------------
/database/migrations/2014_10_12_100000_create_password_resets_table.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Illuminate\Support\Facades\Schema;
 4 | use Illuminate\Database\Schema\Blueprint;
 5 | use Illuminate\Database\Migrations\Migration;
 6 | 
 7 | class CreatePasswordResetsTable extends Migration
 8 | {
 9 |     /**
10 |      * Run the migrations.
11 |      *
12 |      * @return void
13 |      */
14 |     public function up()
15 |     {
16 |         Schema::create('password_resets', function (Blueprint $table) {
17 |             $table->string('email')->index();
18 |             $table->string('token');
19 |             $table->timestamp('created_at')->nullable();
20 |         });
21 |     }
22 | 
23 |     /**
24 |      * Reverse the migrations.
25 |      *
26 |      * @return void
27 |      */
28 |     public function down()
29 |     {
30 |         Schema::dropIfExists('password_resets');
31 |     }
32 | }
33 | 


--------------------------------------------------------------------------------
/database/migrations/2018_02_11_133833_create_posts_table.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Illuminate\Support\Facades\Schema;
 4 | use Illuminate\Database\Schema\Blueprint;
 5 | use Illuminate\Database\Migrations\Migration;
 6 | 
 7 | class CreatePostsTable extends Migration
 8 | {
 9 |     /**
10 |      * Run the migrations.
11 |      *
12 |      * @return void
13 |      */
14 |     public function up()
15 |     {
16 |         Schema::create('posts', function (Blueprint $table) {
17 |             $table->increments('id');
18 |             $table->string('title');
19 |             $table->text('content');
20 |             $table->timestamps();
21 |         });
22 |     }
23 | 
24 |     /**
25 |      * Reverse the migrations.
26 |      *
27 |      * @return void
28 |      */
29 |     public function down()
30 |     {
31 |         Schema::dropIfExists('posts');
32 |     }
33 | }
34 | 


--------------------------------------------------------------------------------
/database/migrations/2018_02_11_133854_create_comments_table.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Illuminate\Support\Facades\Schema;
 4 | use Illuminate\Database\Schema\Blueprint;
 5 | use Illuminate\Database\Migrations\Migration;
 6 | 
 7 | class CreateCommentsTable extends Migration
 8 | {
 9 |     /**
10 |      * Run the migrations.
11 |      *
12 |      * @return void
13 |      */
14 |     public function up()
15 |     {
16 |         Schema::create('comments', function (Blueprint $table) {
17 |             $table->increments('id');
18 |             $table->string('author_email');
19 |             $table->text('content');
20 |             $table->integer('post_id')->unsigned();
21 |             $table->timestamps();
22 | 
23 |             $table->foreign('post_id')->references('id')->on('posts');
24 |         });
25 |     }
26 | 
27 |     /**
28 |      * Reverse the migrations.
29 |      *
30 |      * @return void
31 |      */
32 |     public function down()
33 |     {
34 |         Schema::dropIfExists('comments');
35 |     }
36 | }
37 | 


--------------------------------------------------------------------------------
/database/migrations/2018_02_11_151840_create_authors_table.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Illuminate\Support\Facades\Schema;
 4 | use Illuminate\Database\Schema\Blueprint;
 5 | use Illuminate\Database\Migrations\Migration;
 6 | 
 7 | class CreateAuthorsTable extends Migration
 8 | {
 9 |     /**
10 |      * Run the migrations.
11 |      *
12 |      * @return void
13 |      */
14 |     public function up()
15 |     {
16 |         Schema::create('authors', function (Blueprint $table) {
17 |             $table->increments('id');
18 |             $table->string('name');
19 |             $table->string('email');
20 |             $table->string('bio')->nullable();
21 |             $table->timestamps();
22 |         });
23 |     }
24 | 
25 |     /**
26 |      * Reverse the migrations.
27 |      *
28 |      * @return void
29 |      */
30 |     public function down()
31 |     {
32 |         Schema::dropIfExists('authors');
33 |     }
34 | }
35 | 


--------------------------------------------------------------------------------
/database/migrations/2018_02_11_152637_add_author_id_to_posts.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Illuminate\Support\Facades\Schema;
 4 | use Illuminate\Database\Schema\Blueprint;
 5 | use Illuminate\Database\Migrations\Migration;
 6 | 
 7 | class AddAuthorIdToPosts extends Migration
 8 | {
 9 |     /**
10 |      * Run the migrations.
11 |      *
12 |      * @return void
13 |      */
14 |     public function up()
15 |     {
16 |         Schema::table('posts', function (Blueprint $table) {
17 |             $table->integer('author_id')->unsigned();
18 | 
19 |             $table->foreign('author_id')->references('id')->on('authors');
20 |         });
21 |     }
22 | 
23 |     /**
24 |      * Reverse the migrations.
25 |      *
26 |      * @return void
27 |      */
28 |     public function down()
29 |     {
30 |         Schema::table('posts', function (Blueprint $table) {
31 |             $table->dropForeign('posts_author_id_foreign');
32 |         });
33 |     }
34 | }
35 | 


--------------------------------------------------------------------------------
/database/seeds/DatabaseSeeder.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Illuminate\Database\Seeder;
 4 | 
 5 | class DatabaseSeeder extends Seeder
 6 | {
 7 |     /**
 8 |      * Run the database seeds.
 9 |      *
10 |      * @return void
11 |      */
12 |     public function run()
13 |     {
14 |         // $this->call(UsersTableSeeder::class);
15 |         echo "Creating 10 authors...\n";
16 |         factory(App\Author::class, 10)->create();
17 | 
18 |         echo "Creating 36 posts related to random authors...\n";
19 |         factory(App\Post::class, 36)->create();
20 | 
21 |         echo "Creating 67 comments related to random posts...\n";
22 |         factory(App\Comment::class, 67)->create();
23 |     }
24 | }
25 | 


--------------------------------------------------------------------------------
/idf/.env.example:
--------------------------------------------------------------------------------
1 | DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
2 | 
3 | JWT_SECRET="your-secret-key"
4 | 
5 | NODEMAILER_EMAIL_USER="seu email"
6 | NODEMAILER_EMAIL_PASS="sua senha de app"


--------------------------------------------------------------------------------
/idf/.gitignore:
--------------------------------------------------------------------------------
1 | node_modules
2 | build
3 | .env
4 | coverage


--------------------------------------------------------------------------------
/idf/README.md:
--------------------------------------------------------------------------------
1 | # back_teste_rallw
2 | teste banco de dados
3 | 


--------------------------------------------------------------------------------
/idf/api.http:
--------------------------------------------------------------------------------
 1 | //Criando um evento
 2 | POST http://localhost:3333/api/v1/events
 3 | Content-Type: application/json
 4 | 
 5 | {
 6 | 	"title": "um evento de teste 2",
 7 | 	"details": "Caraca",
 8 | 	"maximumAttendees": null,
 9 | 	"local": "altamira",
10 | 	"price": 50
11 | }
12 | 
13 | ###
14 | //Criando um participante
15 | POST http://localhost:3333/api/v1/events/36e674a7-2553-4674-87c9-1be0734c208c/attendees
16 | Content-Type: application/json
17 | 
18 | {
19 | 	"name": "alefe teste",
20 | 	"email": "alefefelipebiondesmagalhaes@gmail.com",
21 | 	"password": "arroz2018",
22 | 	"phone": "96991695334",
23 | 	"age": 22,
24 | 	"sex": "masculino",
25 | 	"shirtSize": "G",
26 | 	"eventQuantity": 5,
27 | 	"corporation":"esparta"
28 | }
29 | 
30 | ###
31 | //Logando um participante
32 | POST http://localhost:3333/api/v1/sessions
33 | Content-Type: application/json
34 | 
35 | {
36 |   "email": "itu@gmail.com",
37 |   "password": "arroz2018"
38 | }
39 | 
40 | ###
41 | //Buscando um evento
42 | GET  http://localhost:3333/api/v1/events/be36aef9-95bb-4e16-8172-156154b330b9?status=
43 | 
44 | 
45 | ###
46 | //Buscando dados de um participante pelo id - precisa estar logado
47 | GET  http://localhost:3333/api/v1/attendees/1/badge
48 | 
49 | ###
50 | //Fazendo check-in de um participante pelo id
51 | GET  http://localhost:3333/api/v1/attendees/14/check-in
52 | 
53 | ###
54 | //Buscando todos os participantes de um evento - precisa estar logado
55 | GET  http://localhost:3333/api/v1/events/be36aef9-95bb-4e16-8172-156154b330b9/attendees
56 | 
57 | ###
58 | //Buscando todos os eventos
59 | GET http://localhost:3333/api/v1/events/all
60 | 
61 | ###
62 | //Buscando todos os pedidos
63 | GET http://localhost:3333/api/v1/order/all


--------------------------------------------------------------------------------
/idf/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "api",
 3 |   "version": "1.0.0",
 4 |   "description": "api do idf",
 5 |   "main": "index.js",
 6 |   "scripts": {
 7 |     "dev": "tsx watch src/server.ts ",
 8 |     "start": "node build/server.js",
 9 |     "build": "tsup src --out-dir build"
10 |   },
11 |   "author": "alefe",
12 |   "license": "ISC",
13 |   "prisma": {
14 |     "schema": "./prisma/schema.prisma"
15 |   },
16 |   "devDependencies": {
17 |     "@faker-js/faker": "^8.4.1",
18 |     "@types/bcryptjs": "2.4.6",
19 |     "@types/jest": "^29.5.12",
20 |     "@types/node": "20.12.7",
21 |     "prisma": "5.13.0",
22 |     "tsup": "8.0.2",
23 |     "tsx": "4.7.3",
24 |     "typescript": "5.4.5"
25 |   },
26 |   "dependencies": {
27 |     "@fastify/cors": "9.0.1",
28 |     "@fastify/jwt": "^8.0.1",
29 |     "@fastify/swagger": "^8.14.0",
30 |     "@fastify/swagger-ui": "^3.0.0",
31 |     "@prisma/client": "5.13.0",
32 |     "@types/nodemailer": "^6.4.15",
33 |     "axios": "^1.6.8",
34 |     "bcryptjs": "2.4.3",
35 |     "dotenv": "16.4.5",
36 |     "fastify": "4.26.2",
37 |     "fastify-type-provider-zod": "^1.1.9",
38 |     "nodemailer": "^6.9.13",
39 |     "zod": "3.23.4"
40 |   }
41 | }
42 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/20240523010541_create_database/migration.sql:
--------------------------------------------------------------------------------
 1 | -- CreateTable
 2 | CREATE TABLE `events` (
 3 |     `id` VARCHAR(191) NOT NULL,
 4 |     `title` VARCHAR(191) NOT NULL,
 5 |     `details` VARCHAR(191) NULL,
 6 |     `slug` VARCHAR(191) NOT NULL,
 7 |     `maximum_attendees` INTEGER NULL,
 8 |     `local` VARCHAR(191) NOT NULL,
 9 |     `status` BOOLEAN NOT NULL,
10 | 
11 |     UNIQUE INDEX `events_slug_key`(`slug`),
12 |     PRIMARY KEY (`id`)
13 | ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
14 | 
15 | -- CreateTable
16 | CREATE TABLE `attendees` (
17 |     `id` INTEGER NOT NULL AUTO_INCREMENT,
18 |     `name` VARCHAR(191) NOT NULL,
19 |     `email` VARCHAR(191) NOT NULL,
20 |     `password_hashed` VARCHAR(191) NOT NULL,
21 |     `phone` VARCHAR(191) NOT NULL,
22 |     `age` INTEGER NOT NULL,
23 |     `sex` VARCHAR(191) NOT NULL,
24 |     `shirt_size` VARCHAR(191) NOT NULL,
25 |     `event_quantity` INTEGER NOT NULL,
26 |     `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
27 |     `type` ENUM('ATTENDEE', 'ESCORT', 'DRIVER') NOT NULL DEFAULT 'ATTENDEE',
28 |     `corporation_id` INTEGER NOT NULL,
29 |     `event_id` VARCHAR(191) NOT NULL,
30 | 
31 |     UNIQUE INDEX `attendees_email_key`(`email`),
32 |     UNIQUE INDEX `attendees_event_id_email_key`(`event_id`, `email`),
33 |     PRIMARY KEY (`id`)
34 | ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
35 | 
36 | -- CreateTable
37 | CREATE TABLE `leaders` (
38 |     `id` INTEGER NOT NULL AUTO_INCREMENT,
39 |     `name` VARCHAR(191) NOT NULL,
40 |     `email` VARCHAR(191) NOT NULL,
41 |     `password` VARCHAR(191) NOT NULL,
42 |     `access_status` BOOLEAN NOT NULL DEFAULT false,
43 | 
44 |     UNIQUE INDEX `leaders_email_key`(`email`),
45 |     PRIMARY KEY (`id`)
46 | ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
47 | 
48 | -- CreateTable
49 | CREATE TABLE `corporations` (
50 |     `id` INTEGER NOT NULL AUTO_INCREMENT,
51 |     `name` VARCHAR(191) NOT NULL,
52 |     `amount_vacancies` INTEGER NULL,
53 |     `price_vacancies` DOUBLE NULL,
54 |     `payment_status` BOOLEAN NOT NULL DEFAULT false,
55 |     `payment_date` DATETIME(3) NULL,
56 |     `leader_id` INTEGER NOT NULL,
57 |     `event_id` VARCHAR(191) NOT NULL,
58 | 
59 |     UNIQUE INDEX `corporations_leader_id_key`(`leader_id`),
60 |     PRIMARY KEY (`id`)
61 | ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
62 | 
63 | -- CreateTable
64 | CREATE TABLE `CheckIn` (
65 |     `id` INTEGER NOT NULL AUTO_INCREMENT,
66 |     `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
67 |     `attendee_id` INTEGER NOT NULL,
68 | 
69 |     UNIQUE INDEX `CheckIn_attendee_id_key`(`attendee_id`),
70 |     PRIMARY KEY (`id`)
71 | ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
72 | 
73 | -- AddForeignKey
74 | ALTER TABLE `attendees` ADD CONSTRAINT `attendees_corporation_id_fkey` FOREIGN KEY (`corporation_id`) REFERENCES `corporations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
75 | 
76 | -- AddForeignKey
77 | ALTER TABLE `attendees` ADD CONSTRAINT `attendees_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
78 | 
79 | -- AddForeignKey
80 | ALTER TABLE `corporations` ADD CONSTRAINT `corporations_leader_id_fkey` FOREIGN KEY (`leader_id`) REFERENCES `leaders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
81 | 
82 | -- AddForeignKey
83 | ALTER TABLE `corporations` ADD CONSTRAINT `corporations_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
84 | 
85 | -- AddForeignKey
86 | ALTER TABLE `CheckIn` ADD CONSTRAINT `CheckIn_attendee_id_fkey` FOREIGN KEY (`attendee_id`) REFERENCES `attendees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
87 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/20240523141213_alter_line_payment_status_to_string/migration.sql:
--------------------------------------------------------------------------------
1 | /*
2 |   Warnings:
3 | 
4 |   - You are about to alter the column `payment_status` on the `corporations` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
5 | 
6 | */
7 | -- AlterTable
8 | ALTER TABLE `corporations` MODIFY `payment_status` VARCHAR(191) NOT NULL DEFAULT 'doesent pay';
9 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/20240529010455_create_tables_orders_and_products/migration.sql:
--------------------------------------------------------------------------------
 1 | /*
 2 |   Warnings:
 3 | 
 4 |   - You are about to drop the column `amount_vacancies` on the `corporations` table. All the data in the column will be lost.
 5 |   - You are about to drop the column `payment_date` on the `corporations` table. All the data in the column will be lost.
 6 |   - You are about to drop the column `payment_status` on the `corporations` table. All the data in the column will be lost.
 7 |   - You are about to drop the column `price_vacancies` on the `corporations` table. All the data in the column will be lost.
 8 |   - You are about to drop the `CheckIn` table. If the table is not empty, all the data it contains will be lost.
 9 | 
10 | */
11 | -- DropForeignKey
12 | ALTER TABLE `CheckIn` DROP FOREIGN KEY `CheckIn_attendee_id_fkey`;
13 | 
14 | -- AlterTable
15 | ALTER TABLE `attendees` ADD COLUMN `instrument` VARCHAR(191) NULL;
16 | 
17 | -- AlterTable
18 | ALTER TABLE `corporations` DROP COLUMN `amount_vacancies`,
19 |     DROP COLUMN `payment_date`,
20 |     DROP COLUMN `payment_status`,
21 |     DROP COLUMN `price_vacancies`,
22 |     ADD COLUMN `vacancies` INTEGER NOT NULL DEFAULT 0;
23 | 
24 | -- DropTable
25 | DROP TABLE `CheckIn`;
26 | 
27 | -- CreateTable
28 | CREATE TABLE `check_in` (
29 |     `id` INTEGER NOT NULL AUTO_INCREMENT,
30 |     `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
31 |     `attendee_id` INTEGER NOT NULL,
32 | 
33 |     UNIQUE INDEX `check_in_attendee_id_key`(`attendee_id`),
34 |     PRIMARY KEY (`id`)
35 | ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
36 | 
37 | -- CreateTable
38 | CREATE TABLE `orders` (
39 |     `id` INTEGER NOT NULL AUTO_INCREMENT,
40 |     `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
41 |     `status_order` VARCHAR(191) NOT NULL DEFAULT 'progress',
42 |     `payment_status` VARCHAR(191) NOT NULL DEFAULT 'doesent pay',
43 |     `payment_date` DATETIME(3) NULL,
44 |     `payment_method` VARCHAR(191) NOT NULL,
45 |     `amount` DOUBLE NOT NULL,
46 |     `corporation_id` INTEGER NOT NULL,
47 | 
48 |     PRIMARY KEY (`id`)
49 | ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
50 | 
51 | -- CreateTable
52 | CREATE TABLE `products` (
53 |     `id` INTEGER NOT NULL AUTO_INCREMENT,
54 |     `name` VARCHAR(191) NOT NULL,
55 |     `description` VARCHAR(191) NOT NULL,
56 |     `price` DOUBLE NOT NULL,
57 |     `quantity` INTEGER NOT NULL,
58 |     `order_id` INTEGER NULL,
59 | 
60 |     PRIMARY KEY (`id`)
61 | ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
62 | 
63 | -- AddForeignKey
64 | ALTER TABLE `check_in` ADD CONSTRAINT `check_in_attendee_id_fkey` FOREIGN KEY (`attendee_id`) REFERENCES `attendees`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
65 | 
66 | -- AddForeignKey
67 | ALTER TABLE `orders` ADD CONSTRAINT `orders_corporation_id_fkey` FOREIGN KEY (`corporation_id`) REFERENCES `corporations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
68 | 
69 | -- AddForeignKey
70 | ALTER TABLE `products` ADD CONSTRAINT `products_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
71 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/20240529014514_add_unique_to_name_for_product/migration.sql:
--------------------------------------------------------------------------------
1 | /*
2 |   Warnings:
3 | 
4 |   - A unique constraint covering the columns `[name]` on the table `products` will be added. If there are existing duplicate values, this will fail.
5 | 
6 | */
7 | -- CreateIndex
8 | CREATE UNIQUE INDEX `products_name_key` ON `products`(`name`);
9 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/20240529020434_add_colum_quantity_on_order/migration.sql:
--------------------------------------------------------------------------------
1 | -- AlterTable
2 | ALTER TABLE `orders` ADD COLUMN `quantity` INTEGER NOT NULL DEFAULT 0;
3 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/20240530011130_add_row_url_qr_code/migration.sql:
--------------------------------------------------------------------------------
1 | -- AlterTable
2 | ALTER TABLE `orders` ADD COLUMN `url_qr_code` VARCHAR(191) NULL;
3 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/20240530205032_alter_passwordhashed_to_password/migration.sql:
--------------------------------------------------------------------------------
 1 | /*
 2 |   Warnings:
 3 | 
 4 |   - You are about to drop the column `password_hashed` on the `attendees` table. All the data in the column will be lost.
 5 |   - Added the required column `password` to the `attendees` table without a default value. This is not possible if the table is not empty.
 6 | 
 7 | */
 8 | -- AlterTable
 9 | ALTER TABLE `attendees` DROP COLUMN `password_hashed`,
10 |     ADD COLUMN `password` VARCHAR(191) NOT NULL;
11 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/20240603214724_create_column_url_comprovant/migration.sql:
--------------------------------------------------------------------------------
1 | -- AlterTable
2 | ALTER TABLE `orders` ADD COLUMN `url_comprovant` VARCHAR(191) NULL;
3 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/20240605194648_add_relationament_order_and_product/migration.sql:
--------------------------------------------------------------------------------
 1 | /*
 2 |   Warnings:
 3 | 
 4 |   - You are about to drop the column `order_id` on the `products` table. All the data in the column will be lost.
 5 | 
 6 | */
 7 | -- DropForeignKey
 8 | ALTER TABLE `products` DROP FOREIGN KEY `products_order_id_fkey`;
 9 | 
10 | -- AlterTable
11 | ALTER TABLE `products` DROP COLUMN `order_id`;
12 | 
13 | -- CreateTable
14 | CREATE TABLE `_OrderToProduct` (
15 |     `A` INTEGER NOT NULL,
16 |     `B` INTEGER NOT NULL,
17 | 
18 |     UNIQUE INDEX `_OrderToProduct_AB_unique`(`A`, `B`),
19 |     INDEX `_OrderToProduct_B_index`(`B`)
20 | ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
21 | 
22 | -- AddForeignKey
23 | ALTER TABLE `_OrderToProduct` ADD CONSTRAINT `_OrderToProduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
24 | 
25 | -- AddForeignKey
26 | ALTER TABLE `_OrderToProduct` ADD CONSTRAINT `_OrderToProduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
27 | 


--------------------------------------------------------------------------------
/idf/prisma/migrations/migration_lock.toml:
--------------------------------------------------------------------------------
1 | # Please do not edit this file manually
2 | # It should be added in your version-control system (i.e. Git)
3 | provider = "mysql"


--------------------------------------------------------------------------------
/idf/prisma/schema.prisma:
--------------------------------------------------------------------------------
  1 | generator client {
  2 |   provider = "prisma-client-js"
  3 | }
  4 | 
  5 | datasource db {
  6 |   provider = "mysql"
  7 |   url      = env("DATABASE_URL")
  8 | }
  9 | 
 10 | model Event {
 11 |   id               String  @id @default(uuid())
 12 |   title            String
 13 |   details          String?
 14 |   slug             String  @unique
 15 |   maximumAttendees Int?    @map("maximum_attendees")
 16 |   local            String
 17 |   status           Boolean
 18 | 
 19 |   attendees    Attendee[]
 20 |   corporations Corporation[]
 21 | 
 22 |   @@map("events")
 23 | }
 24 | 
 25 | model Attendee {
 26 |   id            Int          @id @default(autoincrement())
 27 |   name          String
 28 |   email         String       @unique
 29 |   password      String
 30 |   phone         String
 31 |   age           Int
 32 |   sex           String
 33 |   shirtSize     String       @map("shirt_size")
 34 |   eventQuantity Int          @map("event_quantity")
 35 |   instrument    String?
 36 |   createdAt     DateTime     @default(now()) @map("created_at")
 37 |   type          TypeAttendee @default(ATTENDEE)
 38 | 
 39 |   corporationId Int         @map("corporation_id")
 40 |   corporation   Corporation @relation(fields: [corporationId], references: [id])
 41 |   eventId       String      @map("event_id")
 42 |   event         Event       @relation(fields: [eventId], references: [id], onDelete: Cascade)
 43 |   checkIn       CheckIn?
 44 | 
 45 |   @@unique([eventId, email])
 46 |   @@map("attendees")
 47 | }
 48 | 
 49 | model Leader {
 50 |   id           Int     @id @default(autoincrement())
 51 |   name         String
 52 |   email        String  @unique
 53 |   password     String
 54 |   accessStatus Boolean @default(false) @map("access_status")
 55 | 
 56 |   corporation Corporation?
 57 | 
 58 |   @@map("leaders")
 59 | }
 60 | 
 61 | model Corporation {
 62 |   id        Int    @id @default(autoincrement())
 63 |   name      String
 64 |   vacancies Int    @default(0)
 65 | 
 66 |   leader   Leader @relation(fields: [leaderId], references: [id])
 67 |   leaderId Int    @unique @map("leader_id")
 68 |   event    Event  @relation(fields: [eventId], references: [id])
 69 |   eventId  String @map("event_id")
 70 | 
 71 |   attendee Attendee[]
 72 |   order    Order[]
 73 | 
 74 |   @@map("corporations")
 75 | }
 76 | 
 77 | model CheckIn {
 78 |   id        Int      @id @default(autoincrement())
 79 |   createdAt DateTime @default(now()) @map("created_at")
 80 | 
 81 |   ateendee   Attendee @relation(fields: [attendeeId], references: [id], onDelete: Cascade)
 82 |   attendeeId Int      @unique @map("attendee_id")
 83 | 
 84 |   @@map("check_in")
 85 | }
 86 | 
 87 | model Order {
 88 |   id            Int       @id @default(autoincrement())
 89 |   createdAt     DateTime  @default(now()) @map("created_at")
 90 |   statusOrder   String    @default("progress") @map("status_order")
 91 |   paymentStatus String    @default("doesent pay") @map("payment_status")
 92 |   paymentDate   DateTime? @map("payment_date")
 93 |   paymentMethod String    @map("payment_method")
 94 |   urlQrCode     String?   @map("url_qr_code")
 95 |   amount        Float
 96 |   quantity      Int       @default(0)
 97 |   urlComprovant String?   @map("url_comprovant")
 98 | 
 99 |   products      Product[]
100 |   corporation   Corporation @relation(fields: [corporationId], references: [id])
101 |   corporationId Int         @map("corporation_id")
102 | 
103 |   @@map("orders")
104 | }
105 | 
106 | model Product {
107 |   id          Int    @id @default(autoincrement())
108 |   name        String @unique
109 |   description String
110 |   price       Float
111 |   quantity    Int
112 | 
113 |   order Order[]
114 | 
115 |   @@map("products")
116 | }
117 | 
118 | enum TypeAttendee {
119 |   ATTENDEE
120 |   ESCORT
121 |   DRIVER
122 | }
123 | 


--------------------------------------------------------------------------------
/idf/src/@types/fastify-jwt.d.ts:
--------------------------------------------------------------------------------
 1 | import '@fastify/jwt'
 2 | 
 3 | declare module '@fastify/jwt' {
 4 |   export interface FastifyJWT {
 5 |     user: {
 6 |       sub: string
 7 |     }
 8 |   }
 9 | }
10 | 


--------------------------------------------------------------------------------
/idf/src/app.ts:
--------------------------------------------------------------------------------
 1 | import fastify from 'fastify'
 2 | import fastifyCors from '@fastify/cors'
 3 | 
 4 | import { appRoutes } from './v1/routes'
 5 | import fastifyJwt from '@fastify/jwt'
 6 | import { env } from './env'
 7 | 
 8 | export const app = fastify()
 9 | 
10 | app.register(fastifyJwt, {
11 |   secret: env.JWT_SECRET
12 | })
13 | 
14 | app.register(appRoutes)
15 | 
16 | app.register(fastifyCors, {
17 |   origin: '*'
18 | })
19 | 


--------------------------------------------------------------------------------
/idf/src/env/index.ts:
--------------------------------------------------------------------------------
 1 | import 'dotenv/config'
 2 | import { z } from 'zod'
 3 | 
 4 | const envSchema = z.object({
 5 |   NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
 6 |   PORT: z.coerce.number().default(3333),
 7 |   RAILWAY_PUBLIC_DOMAIN: z.string().default('http://localhost'),
 8 |   JWT_SECRET: z.string(),
 9 |   NODEMAILER_EMAIL_USER: z.string(),
10 |   NODEMAILER_EMAIL_PASS: z.string()
11 | })
12 | 
13 | const _env = envSchema.safeParse(process.env)
14 | 
15 | if (!_env.success) {
16 |   console.error('Invalid environment variables', _env.error.format())
17 |   throw new Error('Invalid environment variables')
18 | }
19 | 
20 | export const env = _env.data
21 | 


--------------------------------------------------------------------------------
/idf/src/lib/prisma.ts:
--------------------------------------------------------------------------------
1 | import { PrismaClient } from '@prisma/client'
2 | 
3 | export const prisma = new PrismaClient({
4 |   log: ['query']
5 | })
6 | 


--------------------------------------------------------------------------------
/idf/src/server.ts:
--------------------------------------------------------------------------------
 1 | import { app } from './app'
 2 | import { env } from './env'
 3 | 
 4 | app
 5 |   .listen({
 6 |     host: '0.0.0.0',
 7 |     port: env.PORT
 8 |   })
 9 |   .then(() => {
10 |     console.log(
11 |       `🚀 Server listening on ${env.RAILWAY_PUBLIC_DOMAIN}:${env.PORT}`
12 |     )
13 |   })
14 | 


--------------------------------------------------------------------------------
/idf/src/utils/api.ts:
--------------------------------------------------------------------------------
1 | import axios from 'axios'
2 | 
3 | export const api = axios.create({
4 |   baseURL: 'https://institutodesenhandoofuturo.controle.srv1br.com.br'
5 | })
6 | 


--------------------------------------------------------------------------------
/idf/src/utils/generate-slug.ts:
--------------------------------------------------------------------------------
1 | export function generateSlug(text: string): string {
2 |   return text
3 |     .normalize('NFD')
4 |     .replace(/[\u0300-\u036f]/g, '')
5 |     .toLowerCase()
6 |     .replace(/[^\w\s-]/g, '')
7 |     .replace(/\s+/g, '-')
8 | }
9 | 


--------------------------------------------------------------------------------
/idf/src/v1/attendees/delete-attendee-for-event.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function DeleteAttendeeForEvent(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().delete(
 9 |     '/api/v1/events/attendee/:attendeeId/delete',
10 |     {
11 |       schema: {
12 |         summary: 'Delete an attendee for an event',
13 |         tags: ['attendees'],
14 |         params: z.object({
15 |           attendeeId: z.coerce.number().int()
16 |         }),
17 |         response: {
18 |           201: z.object({
19 |             message: z.string().default('Attendee deleted successfully')
20 |           }),
21 |           404: z.object({
22 |             message: z.string()
23 |           }),
24 |           401: z.object({
25 |             message: z.string()
26 |           })
27 |         }
28 |       }
29 |     },
30 |     async (request, reply) => {
31 |       try {
32 |         await request.jwtVerify()
33 | 
34 |         const { attendeeId } = request.params
35 | 
36 |         const attendeeResponse = await prisma.attendee.findUnique({
37 |           where: {
38 |             id: attendeeId
39 |           }
40 |         })
41 | 
42 |         if (attendeeResponse === null) {
43 |           return reply.status(404).send({ message: 'Attendee not found' })
44 |         }
45 | 
46 |         if (attendeeResponse) {
47 |           await prisma.attendee.delete({
48 |             where: {
49 |               id: attendeeId
50 |             }
51 |           })
52 | 
53 |           const corporation = await prisma.corporation.findFirst({
54 |             where: {
55 |               id: attendeeResponse.corporationId
56 |             }
57 |           })
58 | 
59 |           if (corporation) {
60 |             await prisma.corporation.update({
61 |               where: {
62 |                 id: attendeeResponse.corporationId
63 |               },
64 |               data: {
65 |                 vacancies: corporation.vacancies + 1
66 |               }
67 |             })
68 |           }
69 |         }
70 | 
71 |         return reply.status(201).send()
72 |       } catch (error) {
73 |         return reply.status(401).send({ message: 'Unauthorized' })
74 |       }
75 |     }
76 |   )
77 | }
78 | 


--------------------------------------------------------------------------------
/idf/src/v1/attendees/edit-attendee-for-event.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function EditAttendeeForEvent(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().put(
 9 |     '/api/v1/events/attendee/:attendeeId/edit',
10 |     {
11 |       schema: {
12 |         summary: 'Edit an attendee for an event',
13 |         tags: ['attendees'],
14 |         params: z.object({
15 |           attendeeId: z.coerce.number().int()
16 |         }),
17 |         body: z.object({
18 |           name: z.string().min(4).nullish(),
19 |           age: z.number().int().positive().nullish(),
20 |           instrument: z.string().nullish(),
21 |           corporationId: z.number().nullish()
22 |         }),
23 |         response: {
24 |           201: z.object({
25 |             message: z.string().default('Attendee updated successfully')
26 |           }),
27 |           404: z.object({
28 |             message: z.string()
29 |           }),
30 |           401: z.object({
31 |             message: z.string()
32 |           })
33 |         }
34 |       }
35 |     },
36 |     async (request, reply) => {
37 |       try {
38 |         await request.jwtVerify()
39 |         const { attendeeId } = request.params
40 |         const { name, age, corporationId, instrument } = request.body
41 | 
42 |         const attendeeResponse = await prisma.attendee.findUnique({
43 |           where: {
44 |             id: attendeeId
45 |           }
46 |         })
47 | 
48 |         if (attendeeResponse === null) {
49 |           return reply.status(404).send({ message: 'Attendee not found' })
50 |         }
51 | 
52 |         const nameFormatted =
53 |           name == null
54 |             ? attendeeResponse?.name
55 |             : name
56 |                 .toLowerCase()
57 |                 .normalize('NFD')
58 |                 .replace(/[\u0300-\u036f]/g, '')
59 |                 .replace(/\b\w/g, c => c.toUpperCase())
60 | 
61 |         await prisma.attendee.update({
62 |           where: {
63 |             id: attendeeId
64 |           },
65 |           data: {
66 |             name: nameFormatted,
67 |             age:
68 |               age === null || age === undefined ? attendeeResponse?.age : age,
69 |             instrument: instrument ? instrument : attendeeResponse.instrument,
70 |             corporationId:
71 |               corporationId === null || corporationId === undefined
72 |                 ? attendeeResponse.corporationId
73 |                 : corporationId
74 |           }
75 |         })
76 | 
77 |         return reply.status(201).send()
78 |       } catch (error) {
79 |         reply.status(401).send({ message: 'Unauthorized' })
80 |       }
81 |     }
82 |   )
83 | }
84 | 


--------------------------------------------------------------------------------
/idf/src/v1/attendees/edit-for-event.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function EditAttendeeForEvent(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().put(
 9 |     '/api/v1/events/attendee/:attendeeId/edit',
10 |     {
11 |       schema: {
12 |         summary: 'Edit an attendee for an event',
13 |         tags: ['attendees'],
14 |         params: z.object({
15 |           attendeeId: z.coerce.number().int()
16 |         }),
17 |         body: z.object({
18 |           name: z.string().min(4).nullish(),
19 |           age: z.number().int().positive().nullish(),
20 |           corporationId: z.number().nullish()
21 |         }),
22 |         response: {
23 |           201: z.object({
24 |             message: z.string().default('Attendee updated successfully')
25 |           }),
26 |           404: z.object({
27 |             message: z.string()
28 |           })
29 |         }
30 |       }
31 |     },
32 |     async (request, reply) => {
33 |       const { attendeeId } = request.params
34 |       const { name, age, corporationId } = request.body
35 | 
36 |       const attendeeResponse = await prisma.attendee.findUnique({
37 |         where: {
38 |           id: attendeeId
39 |         }
40 |       })
41 | 
42 |       if (attendeeResponse === null) {
43 |         return reply.status(404).send({ message: 'Attendee not found' })
44 |       }
45 | 
46 |       const nameFormatted =
47 |         name == null
48 |           ? attendeeResponse?.name
49 |           : name
50 |               .toLowerCase()
51 |               .normalize('NFD')
52 |               .replace(/[\u0300-\u036f]/g, '')
53 |               .replace(/\b\w/g, c => c.toUpperCase())
54 | 
55 |       await prisma.attendee.update({
56 |         where: {
57 |           id: attendeeId
58 |         },
59 |         data: {
60 |           name: nameFormatted,
61 |           age: age === null || age === undefined ? attendeeResponse?.age : age,
62 |           corporationId:
63 |             corporationId === null || corporationId === undefined
64 |               ? attendeeResponse.corporationId
65 |               : corporationId
66 |         }
67 |       })
68 | 
69 |       return reply.status(201).send()
70 |     }
71 |   )
72 | }
73 | 


--------------------------------------------------------------------------------
/idf/src/v1/attendees/get-attendee-badge.ts:
--------------------------------------------------------------------------------
  1 | import { FastifyInstance } from 'fastify'
  2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
  3 | import { z } from 'zod'
  4 | import { prisma } from '../../lib/prisma'
  5 | 
  6 | export async function getAttendeeBadge(app: FastifyInstance) {
  7 |   app.withTypeProvider<ZodTypeProvider>().get(
  8 |     '/api/v1/attendees/:attendeeId/badge',
  9 |     {
 10 |       schema: {
 11 |         summary: 'Get attendee badge',
 12 |         tags: ['attendees'],
 13 |         params: z.object({
 14 |           attendeeId: z.coerce.number().int()
 15 |         }),
 16 |         response: {
 17 |           200: z.object({
 18 |             badge: z.object({
 19 |               id: z.string(),
 20 |               name: z.string(),
 21 |               email: z.string().email(),
 22 |               corporation: z.string(),
 23 |               instrument: z.string().nullable(),
 24 |               eventTitle: z.string(),
 25 |               checkInURL: z.string().url(),
 26 |               type: z.string(),
 27 |               eventDetails: z.string().nullable(),
 28 |               eventId: z.string().uuid()
 29 |             })
 30 |           }),
 31 |           404: z.object({
 32 |             message: z.string()
 33 |           }),
 34 |           401: z.object({
 35 |             message: z.string()
 36 |           })
 37 |         }
 38 |       }
 39 |     },
 40 |     async (request, reply) => {
 41 |       try {
 42 |         await request.jwtVerify()
 43 | 
 44 |         const { attendeeId } = request.params
 45 | 
 46 |         const attendee = await prisma.attendee.findUnique({
 47 |           select: {
 48 |             id: true,
 49 |             name: true,
 50 |             email: true,
 51 |             instrument: true,
 52 |             corporation: {
 53 |               select: {
 54 |                 name: true
 55 |               }
 56 |             },
 57 |             type: true,
 58 |             event: {
 59 |               select: {
 60 |                 title: true,
 61 |                 details: true,
 62 |                 id: true
 63 |               }
 64 |             }
 65 |           },
 66 |           where: {
 67 |             id: attendeeId
 68 |           }
 69 |         })
 70 | 
 71 |         if (attendee === null) {
 72 |           return reply.status(404).send({
 73 |             message: 'Attendee not found'
 74 |           })
 75 |         }
 76 | 
 77 |         const baseURL = `${request.protocol}://${request.hostname}`
 78 |         const checkInURL = new URL(
 79 |           `api/v1/attendees/${attendeeId}/check-in`,
 80 |           baseURL
 81 |         )
 82 | 
 83 |         return reply.send({
 84 |           badge: {
 85 |             id: attendee.id.toString(),
 86 |             name: attendee.name,
 87 |             email: attendee.email,
 88 |             corporation: attendee.corporation.name,
 89 |             instrument: attendee.instrument,
 90 |             eventTitle: attendee.event.title,
 91 |             checkInURL: checkInURL.toString(),
 92 |             type: attendee.type,
 93 |             eventDetails: attendee.event.details,
 94 |             eventId: attendee.event.id
 95 |           }
 96 |         })
 97 |       } catch (error) {
 98 |         return reply.status(401).send({ message: 'Unauthorized' })
 99 |       }
100 |     }
101 |   )
102 | }
103 | 


--------------------------------------------------------------------------------
/idf/src/v1/attendees/register-for-event.ts:
--------------------------------------------------------------------------------
  1 | import { FastifyInstance } from 'fastify'
  2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
  3 | import { prisma } from '@/lib/prisma'
  4 | 
  5 | import nodemailer from 'nodemailer'
  6 | 
  7 | import { z } from 'zod'
  8 | 
  9 | import { env } from '@/env'
 10 | import { TypeAttendee } from '@prisma/client'
 11 | 
 12 | export async function registerForEvent(app: FastifyInstance) {
 13 |   app.withTypeProvider<ZodTypeProvider>().post(
 14 |     '/api/v1/events/:eventId/attendees',
 15 |     {
 16 |       schema: {
 17 |         summary: 'Register an attendee for an event',
 18 |         tags: ['attendees'],
 19 |         params: z.object({
 20 |           eventId: z.string().uuid()
 21 |         }),
 22 |         body: z.object({
 23 |           name: z.string().min(4),
 24 |           email: z.string().email().toLowerCase(),
 25 |           phone: z.string().min(11),
 26 |           age: z.number().int().positive(),
 27 |           type: z.string().default('ATTENDEE'),
 28 |           sex: z.string().min(1),
 29 |           shirtSize: z.string().min(1),
 30 |           eventQuantity: z.number().min(0).max(5), // fazendo com que o usuario coloque que participu de 0 a 5 eventos
 31 |           corporationId: z.number(),
 32 |           instrument: z.string().nullish().default('Sem instrumento')
 33 |         }),
 34 |         response: {
 35 |           201: z.object({
 36 |             attendeeId: z.number(),
 37 |             emailStatus: z.string()
 38 |           }),
 39 |           409: z.object({
 40 |             message: z.string()
 41 |           }),
 42 |           404: z.object({
 43 |             message: z.string()
 44 |           })
 45 |         }
 46 |       }
 47 |     },
 48 |     async (request, reply) => {
 49 |       const { eventId } = request.params
 50 |       const {
 51 |         name,
 52 |         email,
 53 |         age,
 54 |         type,
 55 |         corporationId,
 56 |         eventQuantity,
 57 |         phone,
 58 |         sex,
 59 |         shirtSize,
 60 |         instrument
 61 |       } = request.body
 62 | 
 63 |       const nameFormatted = name
 64 |         .toLowerCase()
 65 |         .normalize('NFD')
 66 |         .replace(/[\u0300-\u036f]/g, '')
 67 |         .replace(/\b\w/g, c => c.toUpperCase())
 68 | 
 69 |       const attendeeFromEmail = await prisma.attendee.findUnique({
 70 |         where: {
 71 |           eventId_email: {
 72 |             eventId,
 73 |             email
 74 |           }
 75 |         }
 76 |       })
 77 | 
 78 |       if (attendeeFromEmail !== null) {
 79 |         return reply.status(409).send({ message: 'Attendee already exists' })
 80 |       }
 81 | 
 82 |       const [event, amountOfAttendeesForEvent] = await Promise.all([
 83 |         prisma.event.findUnique({
 84 |           where: {
 85 |             id: eventId
 86 |           }
 87 |         }),
 88 |         prisma.attendee.count({
 89 |           where: {
 90 |             eventId
 91 |           }
 92 |         })
 93 |       ])
 94 | 
 95 |       if (
 96 |         event?.maximumAttendees &&
 97 |         amountOfAttendeesForEvent >= event?.maximumAttendees
 98 |       ) {
 99 |         return reply.status(409).send({ message: 'Event is full' })
100 |       }
101 | 
102 |       if (event === null) {
103 |         return reply.status(404).send({ message: 'Event not found' })
104 |       }
105 | 
106 |       if (event?.status === false) {
107 |         return reply.status(409).send({ message: 'Event is not active' })
108 |       }
109 | 
110 |       let typeConverted: TypeAttendee = TypeAttendee.ATTENDEE
111 | 
112 |       if (type === 'ATTENDEE') {
113 |         typeConverted = TypeAttendee.ATTENDEE
114 |       }
115 |       if (type === 'DRIVER') {
116 |         typeConverted = TypeAttendee.DRIVER
117 |       }
118 | 
119 |       if (type === 'ESCORT') {
120 |         typeConverted = TypeAttendee.ESCORT
121 |       }
122 | 
123 |       const corporation = await prisma.corporation.findUnique({
124 |         where: {
125 |           id: corporationId
126 |         }
127 |       })
128 | 
129 |       if (corporation === null) {
130 |         return reply.status(404).send({ message: 'Corporation not found' })
131 |       }
132 | 
133 |       if (corporation.vacancies <= 0) {
134 |         return reply
135 |           .status(409)
136 |           .send({ message: 'Corporation vacancies is full' })
137 |       }
138 | 
139 |       const attendee = await prisma.attendee.create({
140 |         data: {
141 |           name: nameFormatted,
142 |           email,
143 |           age,
144 |           type: typeConverted,
145 |           corporationId,
146 |           eventQuantity,
147 |           password: event.slug,
148 |           phone,
149 |           sex,
150 |           shirtSize,
151 |           eventId,
152 |           instrument
153 |         }
154 |       })
155 | 
156 |       await prisma.corporation.update({
157 |         where: {
158 |           id: corporationId
159 |         },
160 |         data: {
161 |           vacancies: corporation.vacancies - 1
162 |         }
163 |       })
164 | 
165 |       if (attendee) {
166 |         const transporter = nodemailer.createTransport({
167 |           host: 'smtp.gmail.com',
168 |           service: 'gmail',
169 |           secure: true,
170 |           auth: {
171 |             user: env.NODEMAILER_EMAIL_USER,
172 |             pass: env.NODEMAILER_EMAIL_PASS
173 |           }
174 |         })
175 | 
176 |         const response = await transporter
177 |           .sendMail({
178 |             from: env.NODEMAILER_EMAIL_USER,
179 |             to: attendee.email,
180 |             subject: 'Inscrição realizada com sucesso',
181 |             html: `
182 |             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
183 |               <div style="background-color: #293F92; padding: 20px; border-radius: 10px; text-align: center;">
184 |                 <h1 style="color: white;">Inscrição Realizada com Sucesso!</h1>
185 |               </div>
186 |               <div style="padding: 20px; border: 1px solid #ddd; border-radius: 10px; margin-top: 20px; background-color: white;">
187 |                 <p style="color: #293F92;">Olá, <strong>${attendee.name}</strong>!</p>
188 |                 <p>Estamos muito felizes em informar que sua inscrição para o evento <strong>${event.title}</strong> foi realizada com sucesso!</p>
189 |                 <p>Segue abaixo as informações da sua inscrição:</p>
190 |                 <p><strong>Email:</strong> ${attendee.email}</p>
191 |                 <p><strong>senha:</strong> ${event.slug}</p>
192 |                 <p style="margin-top: 20px;">Atenciosamente,</p>
193 |                 <p><strong>Equipe de Organização do Evento - IDF</strong></p>
194 |                 <div style="margin-top: 30px; text-align: center;">
195 |                   <a href="https://institutodesenhandofuturo.com.br/" style="background-color: #293F92; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visite nosso site</a>
196 |                 </div>
197 |               </div>
198 |             </div>
199 |           `
200 |           })
201 |           .then(info => {
202 |             return info
203 |           })
204 |           .catch(err => {
205 |             return err
206 |           })
207 | 
208 |         if (!response.messageId) {
209 |           return reply
210 |             .status(201)
211 |             .send({ attendeeId: attendee.id, emailStatus: 'Não enviado' })
212 |         }
213 |       }
214 | 
215 |       return reply
216 |         .status(201)
217 |         .send({ attendeeId: attendee.id, emailStatus: 'Enviado' })
218 |     }
219 |   )
220 | }
221 | 


--------------------------------------------------------------------------------
/idf/src/v1/auth/sessions.ts:
--------------------------------------------------------------------------------
  1 | import { FastifyInstance } from 'fastify'
  2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
  3 | import { z } from 'zod'
  4 | import { prisma } from '../../lib/prisma'
  5 | 
  6 | export async function authenticateAttendee(app: FastifyInstance) {
  7 |   app.withTypeProvider<ZodTypeProvider>().post(
  8 |     '/api/v1/sessions',
  9 |     {
 10 |       schema: {
 11 |         summary: 'Authenticate a user and return a session token',
 12 |         tags: ['auth'],
 13 |         body: z.object({
 14 |           email: z.string().email().toLowerCase(),
 15 |           password: z.string()
 16 |         }),
 17 |         response: {
 18 |           200: z.object({
 19 |             user: z.object({
 20 |               email: z.string(),
 21 |               userId: z.number(),
 22 |               corporationId: z.number(),
 23 |               accessStatus: z.string(),
 24 |               type: z.string()
 25 |             }),
 26 |             token: z.string()
 27 |           }),
 28 |           404: z.object({
 29 |             message: z.string()
 30 |           })
 31 |         }
 32 |       }
 33 |     },
 34 |     async (request, reply) => {
 35 |       const { email, password } = request.body
 36 | 
 37 |       const leader = await prisma.leader.findUnique({
 38 |         select: {
 39 |           email: true,
 40 |           password: true,
 41 |           id: true,
 42 |           accessStatus: true,
 43 |           corporation: {
 44 |             select: {
 45 |               id: true,
 46 |               name: true
 47 |             }
 48 |           }
 49 |         },
 50 |         where: {
 51 |           email
 52 |         }
 53 |       })
 54 | 
 55 |       const attendee = await prisma.attendee.findUnique({
 56 |         select: {
 57 |           email: true,
 58 |           password: true,
 59 |           id: true,
 60 |           type: true,
 61 |           corporation: {
 62 |             select: {
 63 |               id: true,
 64 |               name: true,
 65 |               leader: {
 66 |                 select: {
 67 |                   accessStatus: true
 68 |                 }
 69 |               }
 70 |             }
 71 |           }
 72 |         },
 73 |         where: {
 74 |           email
 75 |         }
 76 |       })
 77 | 
 78 |       if (!leader && !attendee) {
 79 |         return reply.status(404).send({
 80 |           message: 'Credentials do not match'
 81 |         })
 82 |       }
 83 | 
 84 |       if (leader) {
 85 |         if (leader.password !== password) {
 86 |           return reply.status(404).send({
 87 |             message: 'Credentials do not match'
 88 |           })
 89 |         }
 90 |       }
 91 | 
 92 |       let accessStatus = 'unauthorized'
 93 | 
 94 |       if (leader) {
 95 |         const token = await reply.jwtSign(
 96 |           {},
 97 |           {
 98 |             sign: {
 99 |               sub: leader.id.toString()
100 |             }
101 |           }
102 |         )
103 | 
104 |         if (leader.accessStatus === true) {
105 |           accessStatus = 'authorized'
106 |         }
107 | 
108 |         if (leader && leader.corporation) {
109 |           if (leader.id == 8) {
110 |             return reply.send({
111 |               user: {
112 |                 email: leader.email,
113 |                 userId: leader.id,
114 |                 corporationId: leader.corporation.id,
115 |                 accessStatus,
116 |                 type: 'ADMIN'
117 |               },
118 |               token
119 |             })
120 |           }
121 |           return reply.send({
122 |             user: {
123 |               email: leader.email,
124 |               userId: leader.id,
125 |               corporationId: leader.corporation.id,
126 |               accessStatus,
127 |               type: 'LEADER'
128 |             },
129 |             token
130 |           })
131 |         }
132 |       }
133 | 
134 |       if (attendee) {
135 |         if (password !== attendee.password) {
136 |           return reply.status(404).send({
137 |             message: 'Credentials do not match'
138 |           })
139 |         }
140 | 
141 |         const token = await reply.jwtSign(
142 |           {},
143 |           {
144 |             sign: {
145 |               sub: attendee.id.toString()
146 |             }
147 |           }
148 |         )
149 | 
150 |         if (attendee.corporation.leader.accessStatus === true) {
151 |           accessStatus = 'authorized'
152 |         }
153 | 
154 |         if (attendee && attendee.corporation) {
155 |           let type = ''
156 | 
157 |           if (attendee.type === 'ATTENDEE') {
158 |             type = 'ATTENDEE'
159 |           }
160 |           if (attendee.type === 'DRIVER') {
161 |             type = 'DRIVER'
162 |           }
163 | 
164 |           if (attendee.type === 'ESCORT') {
165 |             type = 'ESCORT'
166 |           }
167 | 
168 |           return reply.send({
169 |             user: {
170 |               email: attendee.email,
171 |               userId: attendee.id,
172 |               corporationId: attendee.corporation.id,
173 |               accessStatus,
174 |               type
175 |             },
176 |             token
177 |           })
178 |         }
179 |       }
180 |     }
181 |   )
182 | }
183 | 


--------------------------------------------------------------------------------
/idf/src/v1/check-ins/check-in.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { z } from 'zod'
 4 | import { prisma } from '../../lib/prisma'
 5 | 
 6 | export async function checkIn(app: FastifyInstance) {
 7 |   app.withTypeProvider<ZodTypeProvider>().get(
 8 |     '/api/v1/attendees/:attendeeId/check-in',
 9 |     {
10 |       schema: {
11 |         summary: 'Check in an attendee',
12 |         tags: ['check-ins'],
13 |         params: z.object({
14 |           attendeeId: z.coerce.number().int()
15 |         }),
16 |         response: {
17 |           201: z.null(),
18 |           409: z.object({
19 |             message: z.string()
20 |           })
21 |         }
22 |       }
23 |     },
24 |     async (request, reply) => {
25 |       const { attendeeId } = request.params
26 | 
27 |       const attendeeCheckIn = await prisma.checkIn.findUnique({
28 |         where: {
29 |           attendeeId
30 |         }
31 |       })
32 | 
33 |       if (attendeeCheckIn !== null) {
34 |         return reply
35 |           .status(409)
36 |           .send({ message: 'Attendee already checked in' })
37 |       }
38 | 
39 |       await prisma.checkIn.create({
40 |         data: {
41 |           attendeeId
42 |         }
43 |       })
44 | 
45 |       return reply.status(201).send()
46 |     }
47 |   )
48 | }
49 | 


--------------------------------------------------------------------------------
/idf/src/v1/corporation/create-corporation.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { prisma } from '@/lib/prisma'
 6 | 
 7 | export async function createCorporation(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().post(
 9 |     '/api/v1/corporation/:leaderId/event/:eventId',
10 |     {
11 |       schema: {
12 |         summary: 'Create an corporation',
13 |         tags: ['corporation'],
14 |         body: z.object({
15 |           name: z.string().min(3).max(255)
16 |         }),
17 |         params: z.object({
18 |           leaderId: z.coerce.number(),
19 |           eventId: z.string().uuid()
20 |         }),
21 |         response: {
22 |           201: z.object({
23 |             corporationId: z.number()
24 |           }),
25 |           409: z.object({
26 |             message: z.string()
27 |           }),
28 |           404: z.object({
29 |             message: z.string()
30 |           })
31 |         }
32 |       }
33 |     },
34 |     async (request, reply) => {
35 |       const { name } = request.body
36 |       const { leaderId, eventId } = request.params
37 | 
38 |       const leader = await prisma.leader.findUnique({
39 |         where: {
40 |           id: leaderId
41 |         }
42 |       })
43 | 
44 |       if (!leader) {
45 |         return reply.status(404).send({ message: 'Leader not found' })
46 |       }
47 | 
48 |       const event = await prisma.event.findUnique({
49 |         where: {
50 |           id: eventId
51 |         }
52 |       })
53 | 
54 |       if (!event) {
55 |         return reply.status(404).send({ message: 'Event not found' })
56 |       }
57 | 
58 |       const corporation = await prisma.corporation.create({
59 |         data: {
60 |           name,
61 |           leaderId: leaderId,
62 |           eventId: eventId
63 |         }
64 |       })
65 | 
66 |       if (!corporation) {
67 |         return reply.status(409).send({ message: 'Corporation not created' })
68 |       }
69 | 
70 |       return reply.status(201).send({ corporationId: corporation.id })
71 |     }
72 |   )
73 | }
74 | 


--------------------------------------------------------------------------------
/idf/src/v1/corporation/edit-corporation.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { prisma } from '@/lib/prisma'
 6 | 
 7 | export async function editCorporation(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().put(
 9 |     '/api/v1/corporation/:corporationId',
10 |     {
11 |       schema: {
12 |         summary: 'Edit an corporation',
13 |         tags: ['corporation'],
14 |         body: z.object({
15 |           name: z.string().optional(),
16 |           vacancies: z.coerce.number().optional()
17 |         }),
18 |         params: z.object({
19 |           corporationId: z.coerce.number()
20 |         }),
21 |         response: {
22 |           200: z.object({
23 |             id: z.number(),
24 |             name: z.string(),
25 |             vacancies: z.number()
26 |           }),
27 |           409: z.object({
28 |             message: z.string()
29 |           }),
30 |           404: z.object({
31 |             message: z.string()
32 |           })
33 |         }
34 |       }
35 |     },
36 |     async (request, reply) => {
37 |       try {
38 |         await request.jwtVerify()
39 |         const { corporationId } = request.params
40 |         const { name, vacancies } = request.body
41 | 
42 |         const corporation = await prisma.corporation.findUnique({
43 |           where: {
44 |             id: corporationId
45 |           }
46 |         })
47 | 
48 |         if (!corporation) {
49 |           return reply.status(404).send({
50 |             message: 'Corporation not found'
51 |           })
52 |         }
53 | 
54 |         const corporationPut = await prisma.corporation.update({
55 |           where: {
56 |             id: corporationId
57 |           },
58 |           data: {
59 |             name,
60 |             vacancies
61 |           }
62 |         })
63 | 
64 |         if (!corporationPut) {
65 |           return reply.status(409).send({
66 |             message: 'Error to update corporation'
67 |           })
68 |         }
69 | 
70 |         return reply.send({
71 |           id: corporationPut.id,
72 |           name: corporationPut.name,
73 |           vacancies: corporationPut.vacancies
74 |         })
75 |       } catch (error) {
76 |         return reply.status(401).send({ message: 'Unauthorized' })
77 |       }
78 |     }
79 |   )
80 | }
81 | 


--------------------------------------------------------------------------------
/idf/src/v1/corporation/get-corporation.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function getCorporation(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().get(
 9 |     '/api/v1/corporation/:corporationId',
10 |     {
11 |       schema: {
12 |         summary: 'Get an corporation',
13 |         tags: ['corporation'],
14 |         params: z.object({
15 |           corporationId: z.coerce.number().int().positive()
16 |         }),
17 |         response: {
18 |           200: z.object({
19 |             corporation: z.object({
20 |               id: z.number(),
21 |               name: z.string(),
22 |               vacancies: z.number(),
23 |               attendees: z.number()
24 |             })
25 |           }),
26 |           404: z.object({
27 |             message: z.string()
28 |           })
29 |         }
30 |       }
31 |     },
32 |     async (request, reply) => {
33 |       const { corporationId } = request.params
34 | 
35 |       const corporation = await prisma.corporation.findUnique({
36 |         select: {
37 |           id: true,
38 |           name: true,
39 |           vacancies: true,
40 |           attendee: {
41 |             select: {
42 |               id: true
43 |             }
44 |           }
45 |         },
46 |         where: {
47 |           id: corporationId
48 |         }
49 |       })
50 | 
51 |       if (!corporation) {
52 |         reply.status(404).send({ message: 'Corporation not found' })
53 |         return
54 |       }
55 | 
56 |       let attendees = 0
57 | 
58 |       if (corporation.attendee) {
59 |         attendees = corporation.attendee.length
60 |       }
61 | 
62 |       reply.send({
63 |         corporation: {
64 |           id: corporation.id,
65 |           name: corporation.name,
66 |           vacancies: corporation.vacancies,
67 |           attendees: attendees
68 |         }
69 |       })
70 |     }
71 |   )
72 | }
73 | 


--------------------------------------------------------------------------------
/idf/src/v1/events/create-event.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { generateSlug } from '@/utils/generate-slug'
 6 | import { prisma } from '@/lib/prisma'
 7 | 
 8 | export async function createEvent(app: FastifyInstance) {
 9 |   app.withTypeProvider<ZodTypeProvider>().post(
10 |     '/api/v1/events',
11 |     {
12 |       schema: {
13 |         summary: 'Create an event',
14 |         tags: ['events'],
15 |         body: z.object({
16 |           title: z.string().min(4),
17 |           details: z.string().nullable(),
18 |           maximumAttendees: z
19 |             .number()
20 |             .int()
21 |             .positive()
22 |             .nullable()
23 |             .default(null),
24 |           local: z.string(),
25 |           status: z.boolean().default(true)
26 |         }),
27 |         response: {
28 |           201: z.object({
29 |             eventId: z.string().uuid()
30 |           }),
31 |           409: z.object({
32 |             message: z.string()
33 |           })
34 |         }
35 |       }
36 |     },
37 |     async (request, reply) => {
38 |       const { details, maximumAttendees, title, local, status } = request.body
39 | 
40 |       const slug = generateSlug(title)
41 | 
42 |       const eventWithSameSlug = await prisma.event.findUnique({
43 |         where: {
44 |           slug
45 |         }
46 |       })
47 | 
48 |       if (eventWithSameSlug !== null) {
49 |         return reply.status(409).send({ message: 'Event already exists' })
50 |       }
51 | 
52 |       const event = await prisma.event.create({
53 |         data: {
54 |           title,
55 |           details,
56 |           maximumAttendees,
57 |           slug,
58 |           local,
59 |           status
60 |         }
61 |       })
62 | 
63 |       return reply.status(201).send({ eventId: event.id })
64 |     }
65 |   )
66 | }
67 | 


--------------------------------------------------------------------------------
/idf/src/v1/events/delete-event.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { prisma } from '@/lib/prisma'
 6 | 
 7 | export async function deleteEvent(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().delete(
 9 |     '/api/v1/events/:eventId',
10 |     {
11 |       schema: {
12 |         summary: 'Delete an event',
13 |         tags: ['events'],
14 |         params: z.object({
15 |           eventId: z.string().uuid()
16 |         }),
17 |         response: {
18 |           201: z.object({
19 |             message: z.string().default('Event deleted successfully')
20 |           }),
21 |           409: z.object({
22 |             message: z.string()
23 |           })
24 |         }
25 |       }
26 |     },
27 |     async (request, reply) => {
28 |       const { eventId } = request.params
29 | 
30 |       const eventResponse = await prisma.event.findUnique({
31 |         where: {
32 |           id: eventId
33 |         }
34 |       })
35 | 
36 |       if (eventResponse === null) {
37 |         return reply.status(409).send({ message: 'Event not found' })
38 |       }
39 | 
40 |       await prisma.event.delete({
41 |         where: {
42 |           id: eventId
43 |         }
44 |       })
45 | 
46 |       return reply.status(201).send()
47 |     }
48 |   )
49 | }
50 | 


--------------------------------------------------------------------------------
/idf/src/v1/events/get-all-events.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function getAllEvents(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().get(
 9 |     '/api/v1/events/all',
10 |     {
11 |       schema: {
12 |         summary: 'Get all events',
13 |         tags: ['events'],
14 |         response: {
15 |           200: z.object({
16 |             events: z.array(
17 |               z.object({
18 |                 id: z.string().uuid(),
19 |                 title: z.string()
20 |               })
21 |             )
22 |           }),
23 |           404: z.object({
24 |             message: z.string()
25 |           })
26 |         }
27 |       }
28 |     },
29 |     async (request, reply) => {
30 |       // Adicionar na api o campo de status do evento - ativo ou inativo
31 |       const event = await prisma.event.findMany({
32 |         select: {
33 |           id: true,
34 |           title: true
35 |         },
36 |         where: {
37 |           status: true
38 |         }
39 |       })
40 | 
41 |       if (event === null) {
42 |         return reply.status(404).send({ message: 'Event not found' })
43 |       }
44 | 
45 |       return reply.send({
46 |         events: event
47 |       })
48 |     }
49 |   )
50 | }
51 | 


--------------------------------------------------------------------------------
/idf/src/v1/events/get-event-attendees-by-corporation.ts:
--------------------------------------------------------------------------------
  1 | import { prisma } from '@/lib/prisma'
  2 | import { FastifyInstance } from 'fastify'
  3 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
  4 | import { z } from 'zod'
  5 | 
  6 | export async function getEventAttendeesByCorporation(app: FastifyInstance) {
  7 |   app.withTypeProvider<ZodTypeProvider>().get(
  8 |     '/api/v1/events/:corporationId/attendees',
  9 |     {
 10 |       schema: {
 11 |         summary: 'Get event attendees by corporation',
 12 |         tags: ['events'],
 13 |         params: z.object({
 14 |           corporationId: z.coerce.number().int()
 15 |         }),
 16 |         response: {
 17 |           200: z.object({
 18 |             attendees: z.array(
 19 |               z.object({
 20 |                 id: z.number(),
 21 |                 name: z.string(),
 22 |                 age: z.number(),
 23 |                 email: z.string().email(),
 24 |                 corporationName: z.string(),
 25 |                 type: z.string(),
 26 |                 checkedInAt: z.date().nullable(),
 27 |                 instrument: z.string().nullable()
 28 |               })
 29 |             )
 30 |           }),
 31 |           401: z.object({
 32 |             message: z.string()
 33 |           }),
 34 |           404: z.object({
 35 |             message: z.string()
 36 |           })
 37 |         }
 38 |       }
 39 |     },
 40 |     async (request, reply) => {
 41 |       try {
 42 |         await request.jwtVerify()
 43 |         const { corporationId } = request.params
 44 | 
 45 |         const corporationExist = await prisma.corporation.findUnique({
 46 |           where: {
 47 |             id: corporationId
 48 |           }
 49 |         })
 50 | 
 51 |         if (corporationExist === null) {
 52 |           return reply.status(404).send({ message: 'Corporation not found' })
 53 |         }
 54 | 
 55 |         const eventExist = await prisma.event.findUnique({
 56 |           where: {
 57 |             id: corporationExist.eventId
 58 |           }
 59 |         })
 60 | 
 61 |         if (eventExist === null) {
 62 |           return reply.status(404).send({ message: 'Event not found' })
 63 |         }
 64 | 
 65 |         const eventId = eventExist.id
 66 | 
 67 |         const [attendees] = await Promise.all([
 68 |           prisma.attendee.findMany({
 69 |             select: {
 70 |               id: true,
 71 |               name: true,
 72 |               age: true,
 73 |               email: true,
 74 |               instrument: true,
 75 |               corporation: {
 76 |                 select: {
 77 |                   name: true
 78 |                 }
 79 |               },
 80 |               type: true,
 81 |               checkIn: {
 82 |                 select: {
 83 |                   createdAt: true
 84 |                 }
 85 |               }
 86 |             },
 87 |             where: {
 88 |               eventId,
 89 |               corporationId
 90 |             },
 91 |             orderBy: {
 92 |               createdAt: 'desc'
 93 |             }
 94 |           })
 95 |         ])
 96 | 
 97 |         return reply.send({
 98 |           attendees: attendees.map(attendee => {
 99 |             return {
100 |               id: attendee.id,
101 |               name: attendee.name,
102 |               age: attendee.age,
103 |               email: attendee.email,
104 |               corporationName: attendee.corporation.name,
105 |               type: attendee.type,
106 |               checkedInAt: attendee.checkIn?.createdAt ?? null,
107 |               instrument: attendee.instrument
108 |             }
109 |           })
110 |         })
111 |       } catch (error) {
112 |         return reply.status(401).send({ message: 'Unauthorized' })
113 |       }
114 |     }
115 |   )
116 | }
117 | 


--------------------------------------------------------------------------------
/idf/src/v1/events/get-event.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function getEvent(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().get(
 9 |     '/api/v1/events/:eventId',
10 |     {
11 |       schema: {
12 |         summary: 'Get an event',
13 |         tags: ['events'],
14 |         params: z.object({
15 |           eventId: z.string().uuid()
16 |         }),
17 |         querystring: z.object({
18 |           status: z.string().nullable()
19 |         }),
20 |         response: {
21 |           200: z.object({
22 |             event: z.object({
23 |               id: z.string().uuid(),
24 |               title: z.string(),
25 |               slug: z.string(),
26 |               details: z.string().nullable(),
27 |               maximumAttendees: z.number().int().nullable(),
28 |               attendeesAmount: z.number().int()
29 |             })
30 |           }),
31 |           404: z.object({
32 |             message: z.string()
33 |           })
34 |         }
35 |       }
36 |     },
37 |     async (request, reply) => {
38 |       const { eventId } = request.params
39 |       const { status } = request.query
40 |       const event = await prisma.event.findUnique({
41 |         select: {
42 |           id: true,
43 |           title: true,
44 |           slug: true,
45 |           details: true,
46 |           maximumAttendees: true,
47 |           status: true,
48 |           _count: {
49 |             select: {
50 |               attendees: true
51 |             }
52 |           }
53 |         },
54 |         where:
55 |           status === 'true' ? { id: eventId, status: true } : { id: eventId }
56 |       })
57 | 
58 |       if (event === null) {
59 |         return reply.status(404).send({ message: 'Event not found' })
60 |       }
61 | 
62 |       if (event.status === false) {
63 |         return reply.status(404).send({ message: 'Event unavailable' })
64 |       }
65 | 
66 |       return reply.send({
67 |         event: {
68 |           id: event.id,
69 |           title: event.title,
70 |           slug: event.slug,
71 |           details: event.details,
72 |           maximumAttendees: event.maximumAttendees,
73 |           attendeesAmount: event._count.attendees
74 |         }
75 |       })
76 |     }
77 |   )
78 | }
79 | 


--------------------------------------------------------------------------------
/idf/src/v1/leader/create-leader.ts:
--------------------------------------------------------------------------------
  1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
  2 | import { z } from 'zod'
  3 | 
  4 | import { FastifyInstance } from 'fastify'
  5 | import { prisma } from '@/lib/prisma'
  6 | 
  7 | import nodemailer from 'nodemailer'
  8 | import { env } from '@/env'
  9 | 
 10 | export async function createLeader(app: FastifyInstance) {
 11 |   app.withTypeProvider<ZodTypeProvider>().post(
 12 |     '/api/v1/leader',
 13 |     {
 14 |       schema: {
 15 |         summary: 'Create an leader',
 16 |         tags: ['leader'],
 17 |         body: z.object({
 18 |           name: z.string().min(3).max(255),
 19 |           email: z.string().email(),
 20 |           password: z.string().min(6).max(255)
 21 |         }),
 22 |         response: {
 23 |           201: z.object({
 24 |             leaderId: z.number()
 25 |           }),
 26 |           409: z.object({
 27 |             message: z.string()
 28 |           })
 29 |         }
 30 |       }
 31 |     },
 32 |     async (request, reply) => {
 33 |       const { name, email, password } = request.body
 34 | 
 35 |       const leaderFromEmail = await prisma.leader.findUnique({
 36 |         where: {
 37 |           email: email
 38 |         }
 39 |       })
 40 | 
 41 |       if (leaderFromEmail) {
 42 |         return reply.status(409).send({ message: 'Leader already exists' })
 43 |       }
 44 | 
 45 |       const leader = await prisma.leader.create({
 46 |         data: {
 47 |           name,
 48 |           email,
 49 |           password
 50 |         }
 51 |       })
 52 | 
 53 |       if (!leader) {
 54 |         return reply.status(409).send({ message: 'Leader not created' })
 55 |       }
 56 | 
 57 |       if (leader) {
 58 |         const transporter = nodemailer.createTransport({
 59 |           host: 'smtp.gmail.com',
 60 |           service: 'gmail',
 61 |           secure: true,
 62 |           auth: {
 63 |             user: env.NODEMAILER_EMAIL_USER,
 64 |             pass: env.NODEMAILER_EMAIL_PASS
 65 |           }
 66 |         })
 67 | 
 68 |         await transporter
 69 |           .sendMail({
 70 |             from: env.NODEMAILER_EMAIL_USER,
 71 |             to: leader.email,
 72 |             subject: 'Solicitação de Credencial Realizada com Sucesso!',
 73 |             html: `
 74 |             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
 75 |               <div style="background-color: #293F92; padding: 20px; border-radius: 10px; text-align: center;">
 76 |                 <h1 style="color: white;">Solicitação de Credencial Realizada com Sucesso!</h1>
 77 |               </div>
 78 |               <div style="padding: 20px; border: 1px solid #ddd; border-radius: 10px; margin-top: 20px; background-color: white;">
 79 |                 <p style="color: #293F92;">Olá, <strong>${leader.name}</strong>!</p>
 80 |                 <p>Estamos muito felizes em informar que sua solicitação de credencial foi realizada com sucesso. Segue abaixo suas credenciais</p>
 81 |                 <p>Login: <strong>${leader.email}</strong></p>
 82 |                 <p>Senha: <strong>${leader.password}</strong></p>
 83 |                 <p style="margin-top: 20px;">Atenciosamente,</p>
 84 |                 <p><strong>Equipe de Organização do Evento - IDF</strong></p>
 85 |                 <div style="margin-top: 30px; text-align: center;">
 86 |                   <a href="https://idf-frontend-psi.vercel.app/" style="background-color: #293F92; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visite nosso site</a>
 87 |                 </div>
 88 |               </div>
 89 |             </div>
 90 |           `
 91 |           })
 92 |           .then(info => {
 93 |             return reply.status(201).send({ leaderId: leader.id })
 94 |           })
 95 |           .catch(err => {
 96 |             return reply.status(201).send({ leaderId: leader.id })
 97 |           })
 98 |       }
 99 | 
100 |       return reply.status(201).send({ leaderId: leader.id })
101 |     }
102 |   )
103 | }
104 | 


--------------------------------------------------------------------------------
/idf/src/v1/leader/delete-leader.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { prisma } from '@/lib/prisma'
 6 | 
 7 | export async function deleteLeader(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().delete(
 9 |     '/api/v1/leader/:leaderId',
10 |     {
11 |       schema: {
12 |         summary: 'Delete an leader',
13 |         tags: ['leader'],
14 |         params: z.object({
15 |           leaderId: z.coerce.number()
16 |         }),
17 |         response: {
18 |           201: z.object({
19 |             message: z.string()
20 |           }),
21 |           409: z.object({
22 |             message: z.string()
23 |           })
24 |         }
25 |       }
26 |     },
27 |     async (request, reply) => {
28 |       const { leaderId } = request.params
29 | 
30 |       const leader = await prisma.leader.findUnique({
31 |         where: {
32 |           id: leaderId
33 |         }
34 |       })
35 | 
36 |       if (!leader) {
37 |         return reply.status(409).send({ message: 'Leader not found' })
38 |       }
39 | 
40 |       const corporation = await prisma.corporation.findUnique({
41 |         where: {
42 |           leaderId
43 |         }
44 |       })
45 | 
46 |       if (corporation) {
47 |         await prisma.corporation.delete({
48 |           where: {
49 |             id: corporation.id
50 |           }
51 |         })
52 | 
53 |         const leaderDeleted = await prisma.leader.delete({
54 |           where: {
55 |             id: leaderId
56 |           }
57 |         })
58 | 
59 |         if (leaderDeleted) {
60 |           return reply
61 |             .status(201)
62 |             .send({ message: 'Leader deleted successfully' })
63 |         }
64 |       }
65 |     }
66 |   )
67 | }
68 | 


--------------------------------------------------------------------------------
/idf/src/v1/leader/edit-leader.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { prisma } from '@/lib/prisma'
 6 | 
 7 | export async function editLeader(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().put(
 9 |     '/api/v1/leader/:leaderId',
10 |     {
11 |       schema: {
12 |         summary: 'Edit an leader',
13 |         tags: ['leader'],
14 |         body: z.object({
15 |           name: z.string().nullish(),
16 |           password: z.string().nullish(),
17 |           corporationName: z.string().nullish(),
18 |           accessStatus: z.string().nullish()
19 |         }),
20 |         params: z.object({
21 |           leaderId: z.coerce.number()
22 |         }),
23 |         response: {
24 |           200: z.object({
25 |             name: z.string().nullish(),
26 |             password: z.string().nullish(),
27 |             corporationName: z.string().nullish(),
28 |             accessStatus: z.boolean().nullish()
29 |           }),
30 |           409: z.object({
31 |             message: z.string()
32 |           }),
33 |           404: z.object({
34 |             message: z.string()
35 |           })
36 |         }
37 |       }
38 |     },
39 |     async (request, reply) => {
40 |       const { leaderId } = request.params
41 |       const { name, password, corporationName, accessStatus } = request.body
42 | 
43 |       let accessStatusConverted = accessStatus === 'Permitido' ? true : false
44 | 
45 |       const leader = await prisma.leader.findUnique({
46 |         select: {
47 |           name: true,
48 |           password: true,
49 |           accessStatus: true,
50 |           corporation: {
51 |             select: {
52 |               name: true
53 |             }
54 |           }
55 |         },
56 |         where: {
57 |           id: leaderId
58 |         }
59 |       })
60 | 
61 |       if (!leader) {
62 |         return reply.status(404).send({ message: 'Leader not found' })
63 |       }
64 | 
65 |       const updateLeader = await prisma.leader.update({
66 |         where: {
67 |           id: leaderId
68 |         },
69 |         data: {
70 |           name: name || leader.name,
71 |           password: password || leader.password,
72 |           accessStatus: accessStatusConverted,
73 |           corporation: {
74 |             update: {
75 |               name: corporationName || leader.corporation?.name
76 |             }
77 |           }
78 |         }
79 |       })
80 | 
81 |       if (!updateLeader) {
82 |         return reply.status(409).send({ message: 'Leader not updated' })
83 |       }
84 | 
85 |       return reply.send({
86 |         name: updateLeader.name,
87 |         password: updateLeader.password,
88 |         corporationName: corporationName,
89 |         accessStatus: updateLeader.accessStatus
90 |       })
91 |     }
92 |   )
93 | }
94 | 


--------------------------------------------------------------------------------
/idf/src/v1/leader/get-all-leaders.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function getAllLeaders(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().get(
 9 |     '/api/v1/leader/all',
10 |     {
11 |       schema: {
12 |         summary: 'Get all leaders',
13 |         tags: ['leaders'],
14 |         response: {
15 |           200: z.object({
16 |             leaders: z.array(
17 |               z.object({
18 |                 id: z.number(),
19 |                 name: z.string(),
20 |                 email: z.string(),
21 |                 accessStatus: z.string(),
22 |                 corporationName: z.string(),
23 |                 vacancies: z.number(),
24 |                 attendees: z.number()
25 |               })
26 |             )
27 |           }),
28 |           404: z.object({
29 |             message: z.string()
30 |           })
31 |         }
32 |       }
33 |     },
34 |     async (request, reply) => {
35 |       // Adicionar na api o campo de status do evento - ativo ou inativo
36 |       const leaders = await prisma.leader.findMany({
37 |         select: {
38 |           id: true,
39 |           name: true,
40 |           email: true,
41 |           accessStatus: true,
42 |           corporation: {
43 |             select: {
44 |               name: true,
45 |               vacancies: true,
46 |               attendee: {
47 |                 select: {
48 |                   id: true
49 |                 }
50 |               }
51 |             }
52 |           }
53 |         }
54 |       })
55 | 
56 |       if (leaders === null) {
57 |         return reply.status(404).send({ message: 'leader not found' })
58 |       }
59 | 
60 |       return reply.send({
61 |         leaders: leaders.map(leader => ({
62 |           id: leader.id,
63 |           name: leader.name,
64 |           email: leader.email,
65 |           accessStatus: leader.accessStatus ? 'Permitido' : 'Negado',
66 |           corporationName: leader.corporation
67 |             ? leader.corporation.name
68 |             : 'Sem corporação',
69 |           vacancies: leader.corporation ? leader.corporation.vacancies : 0,
70 |           attendees: leader.corporation ? leader.corporation.attendee.length : 0
71 |         }))
72 |       })
73 |     }
74 |   )
75 | }
76 | 


--------------------------------------------------------------------------------
/idf/src/v1/order/cancel-roder.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { prisma } from '@/lib/prisma'
 6 | 
 7 | export async function cancelOrder(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().get(
 9 |     '/api/v1/order/cancel/:orderId',
10 |     {
11 |       schema: {
12 |         summary: 'cancel an order',
13 |         tags: ['order'],
14 |         params: z.object({
15 |           orderId: z.coerce.number()
16 |         }),
17 |         response: {
18 |           201: z.object({
19 |             message: z.string()
20 |           }),
21 |           409: z.object({
22 |             message: z.string()
23 |           })
24 |         }
25 |       }
26 |     },
27 |     async (request, reply) => {
28 |       const { orderId } = request.params
29 | 
30 |       const findOrder = await prisma.order.findUnique({
31 |         where: {
32 |           id: orderId
33 |         }
34 |       })
35 | 
36 |       if (!findOrder) {
37 |         return reply.status(409).send({ message: 'Order not found' })
38 |       }
39 | 
40 |       await prisma.order.update({
41 |         data: {
42 |           statusOrder: 'cancelled'
43 |         },
44 |         where: {
45 |           id: orderId
46 |         }
47 |       })
48 | 
49 |       return reply.status(201).send({
50 |         message: 'Order cancelled'
51 |       })
52 |     }
53 |   )
54 | }
55 | 


--------------------------------------------------------------------------------
/idf/src/v1/order/confirm-payment-order.ts:
--------------------------------------------------------------------------------
  1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
  2 | import { z } from 'zod'
  3 | 
  4 | import { FastifyInstance } from 'fastify'
  5 | import { prisma } from '@/lib/prisma'
  6 | 
  7 | import nodemailer from 'nodemailer'
  8 | import { env } from '@/env'
  9 | 
 10 | export async function confirmPaymentOrder(app: FastifyInstance) {
 11 |   app.withTypeProvider<ZodTypeProvider>().get(
 12 |     '/api/v1/order/confirm-payment/:orderId',
 13 |     {
 14 |       schema: {
 15 |         summary: 'confirm payment an order',
 16 |         tags: ['order'],
 17 |         params: z.object({
 18 |           orderId: z.coerce.number()
 19 |         }),
 20 |         response: {
 21 |           201: z.object({
 22 |             orderId: z.number(),
 23 |             statusOrder: z.string(),
 24 |             paymentStatus: z.string()
 25 |           }),
 26 |           409: z.object({
 27 |             message: z.string()
 28 |           })
 29 |         }
 30 |       }
 31 |     },
 32 |     async (request, reply) => {
 33 |       const { orderId } = request.params
 34 | 
 35 |       const findOrder = await prisma.order.findUnique({
 36 |         where: {
 37 |           id: orderId
 38 |         }
 39 |       })
 40 | 
 41 |       if (!findOrder) {
 42 |         return reply.status(409).send({ message: 'Order not found' })
 43 |       }
 44 | 
 45 |       const vacanciesCorporation = await prisma.corporation.findUnique({
 46 |         select: {
 47 |           vacancies: true
 48 |         },
 49 |         where: {
 50 |           id: findOrder.corporationId
 51 |         }
 52 |       })
 53 | 
 54 |       if (!vacanciesCorporation) {
 55 |         return reply.status(409).send({ message: 'Corporation not found' })
 56 |       }
 57 | 
 58 |       const vacancies = vacanciesCorporation.vacancies + findOrder.quantity
 59 | 
 60 |       const order = await prisma.order.update({
 61 |         select: {
 62 |           id: true,
 63 |           paymentStatus: true,
 64 |           statusOrder: true,
 65 |           quantity: true,
 66 |           amount: true,
 67 |           products: {
 68 |             select: {
 69 |               name: true
 70 |             }
 71 |           }
 72 |         },
 73 |         data: {
 74 |           paymentStatus: 'payed',
 75 |           statusOrder: 'finished',
 76 |           paymentDate: new Date()
 77 |         },
 78 |         where: {
 79 |           id: orderId
 80 |         }
 81 |       })
 82 | 
 83 |       const corporation = await prisma.corporation.update({
 84 |         select: {
 85 |           name: true,
 86 |           leader: {
 87 |             select: {
 88 |               email: true
 89 |             }
 90 |           }
 91 |         },
 92 |         data: {
 93 |           vacancies
 94 |         },
 95 |         where: {
 96 |           id: findOrder.corporationId
 97 |         }
 98 |       })
 99 | 
100 |       const transporter = nodemailer.createTransport({
101 |         host: 'smtp.gmail.com',
102 |         service: 'gmail',
103 |         secure: true,
104 |         auth: {
105 |           user: env.NODEMAILER_EMAIL_USER,
106 |           pass: env.NODEMAILER_EMAIL_PASS
107 |         }
108 |       })
109 | 
110 |       await transporter
111 |         .sendMail({
112 |           from: env.NODEMAILER_EMAIL_USER,
113 |           to: corporation.leader.email,
114 |           subject: 'Confirmação de Pagamento do Pedido',
115 |           html: `
116 |             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
117 |               <div style="background-color: #293F92; padding: 20px; border-radius: 10px; text-align: center;">
118 |                 <h1 style="color: white;">Confirmação de Pagamento do Pedido</h1>
119 |               </div>
120 |               <div style="padding: 20px; border: 1px solid #ddd; border-radius: 10px; margin-top: 20px; background-color: white;">
121 |                 <p style="color: #293F92;">Olá, <strong>${corporation.name}</strong>!</p>
122 |                 <p>Estamos muito felizes em informar que seu pagamento foi confirmado. Seguem abaixo os detalhes do pedido:</p>
123 |                 <p><strong>Pedido:</strong> ${order.products[0].name}</p>
124 |                 <p><strong>Quantidade:</strong> ${order.quantity}</p>
125 |                 <p><strong>Valor Total:</strong> ${order.amount}</p>
126 |                 <p style="margin-top: 20px;">Atenciosamente,</p>
127 |                 <p><strong>Equipe de Organização do Evento - IDF</strong></p>
128 |                 <div style="margin-top: 30px; text-align: center;">
129 |                   <a href="https://idf-frontend-psi.vercel.app/" style="background-color: #293F92; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visite nosso site</a>
130 |                 </div>
131 |               </div>
132 |             </div>
133 |           `
134 |         })
135 |         .then(() => {
136 |           return reply.status(201).send({
137 |             orderId: order.id,
138 |             paymentStatus: order.paymentStatus,
139 |             statusOrder: order.statusOrder
140 |           })
141 |         })
142 |         .catch(() => {
143 |           return reply.status(201).send({
144 |             orderId: order.id,
145 |             paymentStatus: order.paymentStatus,
146 |             statusOrder: order.statusOrder
147 |           })
148 |         })
149 | 
150 |       return reply.status(201).send({
151 |         orderId: order.id,
152 |         paymentStatus: order.paymentStatus,
153 |         statusOrder: order.statusOrder
154 |       })
155 |     }
156 |   )
157 | }
158 | 


--------------------------------------------------------------------------------
/idf/src/v1/order/create-order.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { prisma } from '@/lib/prisma'
 6 | 
 7 | export async function createOrder(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().post(
 9 |     '/api/v1/order/:corporationId',
10 |     {
11 |       schema: {
12 |         summary: 'Create an order',
13 |         tags: ['order'],
14 |         body: z.object({
15 |           paymentMethod: z.string().min(3).max(255),
16 |           quantity: z.number(),
17 |           productId: z.number(),
18 |           urlQrCode: z.string().nullish(),
19 |           urlComprovant: z.string().nullish()
20 |         }),
21 |         params: z.object({
22 |           corporationId: z.coerce.number()
23 |         }),
24 |         response: {
25 |           201: z.object({
26 |             orderId: z.number(),
27 |             paymentMethod: z.string(),
28 |             amount: z.number(),
29 |             corporationId: z.number(),
30 |             quantity: z.number(),
31 |             urlQrCode: z.string().nullable(),
32 |             urlComprovant: z.string().nullable()
33 |           }),
34 |           409: z.object({
35 |             message: z.string()
36 |           })
37 |         }
38 |       }
39 |     },
40 |     async (request, reply) => {
41 |       const { paymentMethod, productId, quantity, urlQrCode, urlComprovant } =
42 |         request.body
43 |       const { corporationId } = request.params
44 | 
45 |       const corporation = await prisma.corporation.findUnique({
46 |         where: {
47 |           id: corporationId
48 |         }
49 |       })
50 | 
51 |       if (!corporation) {
52 |         return reply.status(409).send({ message: 'Corporation not found' })
53 |       }
54 | 
55 |       const product = await prisma.product.findUnique({
56 |         where: {
57 |           id: productId
58 |         }
59 |       })
60 | 
61 |       if (!product) {
62 |         return reply.status(409).send({ message: 'Product not found' })
63 |       }
64 | 
65 |       if (product.quantity < quantity) {
66 |         return reply.status(409).send({ message: 'Product out of stock' })
67 |       }
68 | 
69 |       const amount = product.price * quantity
70 | 
71 |       const order = await prisma.order.create({
72 |         data: {
73 |           paymentMethod,
74 |           amount,
75 |           corporationId,
76 |           quantity,
77 |           urlQrCode,
78 |           urlComprovant,
79 |           products: {
80 |             connect: {
81 |               id: productId
82 |             }
83 |           }
84 |         }
85 |       })
86 | 
87 |       return reply.status(201).send({
88 |         orderId: order.id,
89 |         paymentMethod: order.paymentMethod,
90 |         amount: order.amount,
91 |         corporationId: order.corporationId,
92 |         quantity: order.quantity,
93 |         urlQrCode: order.urlQrCode,
94 |         urlComprovant: order.urlComprovant
95 |       })
96 |     }
97 |   )
98 | }
99 | 


--------------------------------------------------------------------------------
/idf/src/v1/order/get-all-orders.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function getAllOrders(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().get(
 9 |     '/api/v1/order/all',
10 |     {
11 |       schema: {
12 |         summary: 'Get all orders',
13 |         tags: ['orders'],
14 |         response: {
15 |           200: z.object({
16 |             orders: z.array(
17 |               z.object({
18 |                 orderId: z.number(),
19 |                 paymentMethod: z.string(),
20 |                 statusOrder: z.string(),
21 |                 paymentStatus: z.string(),
22 |                 amount: z.number(),
23 |                 corporationId: z.number(),
24 |                 corporationName: z.string(),
25 |                 quantity: z.number(),
26 |                 urlQrCode: z.string(),
27 |                 urlComprovant: z.string(),
28 |                 product: z.array(z.object({ name: z.string().nullish() }))
29 |               })
30 |             )
31 |           }),
32 |           404: z.object({
33 |             message: z.string()
34 |           })
35 |         }
36 |       }
37 |     },
38 |     async (request, reply) => {
39 |       const orders = await prisma.order.findMany({
40 |         select: {
41 |           id: true,
42 |           paymentMethod: true,
43 |           statusOrder: true,
44 |           paymentStatus: true,
45 |           amount: true,
46 |           corporationId: true,
47 |           corporation: {
48 |             select: {
49 |               name: true
50 |             }
51 |           },
52 |           quantity: true,
53 |           urlQrCode: true,
54 |           urlComprovant: true,
55 |           products: {
56 |             select: {
57 |               name: true
58 |             }
59 |           }
60 |         }
61 |       })
62 | 
63 |       if (!orders) {
64 |         return reply.status(404).send({ message: 'Orders not found' })
65 |       }
66 | 
67 |       return {
68 |         orders: orders.map(order => ({
69 |           orderId: order.id,
70 |           paymentMethod: order.paymentMethod,
71 |           statusOrder: order.statusOrder,
72 |           paymentStatus: order.paymentStatus,
73 |           amount: order.amount,
74 |           corporationId: order.corporationId,
75 |           corporationName: order.corporation.name,
76 |           quantity: order.quantity,
77 |           urlQrCode: order.urlQrCode || '',
78 |           urlComprovant: order.urlComprovant || '',
79 |           product: order.products.map(product => ({ name: product.name }))
80 |         }))
81 |       }
82 |     }
83 |   )
84 | }
85 | 


--------------------------------------------------------------------------------
/idf/src/v1/order/get-order.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function getOrder(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().get(
 9 |     '/api/v1/order/:corporationId',
10 |     {
11 |       schema: {
12 |         summary: 'Get orders by corporationId',
13 |         tags: ['order'],
14 |         params: z.object({
15 |           corporationId: z.coerce.number().int().positive()
16 |         }),
17 |         response: {
18 |           200: z.object({
19 |             orders: z.array(
20 |               z.object({
21 |                 orderId: z.number(),
22 |                 paymentMethod: z.string(),
23 |                 statusOrder: z.string(),
24 |                 paymentStatus: z.string(),
25 |                 amount: z.number(),
26 |                 corporationId: z.number(),
27 |                 quantity: z.number(),
28 |                 urlQrCode: z.string(),
29 |                 urlComprovant: z.string(),
30 |                 product: z.array(z.object({ name: z.string().nullish() }))
31 |               })
32 |             )
33 |           }),
34 |           404: z.object({
35 |             message: z.string()
36 |           })
37 |         }
38 |       }
39 |     },
40 |     async (request, reply) => {
41 |       const { corporationId } = request.params
42 | 
43 |       const corporation = await prisma.corporation.findUnique({
44 |         where: {
45 |           id: corporationId
46 |         }
47 |       })
48 | 
49 |       if (!corporation) {
50 |         return reply.status(404).send({ message: 'Corporation not found' })
51 |       }
52 | 
53 |       const orders = await prisma.order.findMany({
54 |         select: {
55 |           id: true,
56 |           paymentMethod: true,
57 |           statusOrder: true,
58 |           paymentStatus: true,
59 |           amount: true,
60 |           corporationId: true,
61 |           quantity: true,
62 |           urlQrCode: true,
63 |           urlComprovant: true,
64 |           products: {
65 |             select: {
66 |               name: true
67 |             }
68 |           }
69 |         },
70 |         where: {
71 |           corporationId
72 |         }
73 |       })
74 | 
75 |       if (orders === null) {
76 |         return reply.status(404).send({ message: 'Order not found' })
77 |       }
78 | 
79 |       return reply.send({
80 |         orders: orders.map(order => ({
81 |           orderId: order.id,
82 |           paymentMethod: order.paymentMethod,
83 |           statusOrder: order.statusOrder,
84 |           paymentStatus: order.paymentStatus,
85 |           amount: order.amount,
86 |           corporationId: order.corporationId,
87 |           quantity: order.quantity,
88 |           urlQrCode: order.urlQrCode || '',
89 |           urlComprovant: order.urlComprovant || '',
90 |           product: order.products.map(product => ({ name: product.name }))
91 |         }))
92 |       })
93 |     }
94 |   )
95 | }
96 | 


--------------------------------------------------------------------------------
/idf/src/v1/order/save-comprovant-order.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { prisma } from '@/lib/prisma'
 6 | 
 7 | export async function saveComprovantOrder(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().post(
 9 |     '/api/v1/order/comprovant/:orderId',
10 |     {
11 |       schema: {
12 |         summary: 'Save comprovant an order',
13 |         tags: ['order'],
14 |         body: z.object({
15 |           urlComprovant: z.coerce.string()
16 |         }),
17 |         params: z.object({
18 |           orderId: z.coerce.number()
19 |         }),
20 |         response: {
21 |           201: z.object({
22 |             urlComprovant: z.string()
23 |           }),
24 |           409: z.object({
25 |             message: z.string()
26 |           })
27 |         }
28 |       }
29 |     },
30 |     async (request, reply) => {
31 |       const { urlComprovant } = request.body
32 |       const { orderId } = request.params
33 | 
34 |       const order = await prisma.order.findUnique({
35 |         where: {
36 |           id: orderId
37 |         }
38 |       })
39 | 
40 |       if (!order) {
41 |         return reply.status(409).send({ message: 'Order not found' })
42 |       }
43 | 
44 |       const comprovantUpdated = await prisma.order.update({
45 |         data: {
46 |           urlComprovant: urlComprovant
47 |         },
48 |         where: {
49 |           id: orderId
50 |         }
51 |       })
52 | 
53 |       return reply.status(201).send({
54 |         urlComprovant: comprovantUpdated.urlComprovant || urlComprovant
55 |       })
56 |     }
57 |   )
58 | }
59 | 


--------------------------------------------------------------------------------
/idf/src/v1/product/create-product.ts:
--------------------------------------------------------------------------------
 1 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 2 | import { z } from 'zod'
 3 | 
 4 | import { FastifyInstance } from 'fastify'
 5 | import { prisma } from '@/lib/prisma'
 6 | 
 7 | export async function createProduct(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().post(
 9 |     '/api/v1/product',
10 |     {
11 |       schema: {
12 |         summary: 'Create an product',
13 |         tags: ['product'],
14 |         body: z.object({
15 |           name: z.string().min(3).max(255),
16 |           description: z.string().min(3).max(255),
17 |           price: z.number().min(0),
18 |           quantity: z.number().min(0)
19 |         }),
20 |         response: {
21 |           201: z.object({
22 |             productId: z.number(),
23 |             name: z.string(),
24 |             description: z.string(),
25 |             price: z.number(),
26 |             quantity: z.number()
27 |           }),
28 |           409: z.object({
29 |             message: z.string()
30 |           })
31 |         }
32 |       }
33 |     },
34 |     async (request, reply) => {
35 |       const { name, description, price, quantity } = request.body
36 | 
37 |       const productFromName = await prisma.product.findUnique({
38 |         where: {
39 |           name: name
40 |         }
41 |       })
42 | 
43 |       if (productFromName) {
44 |         return reply.status(409).send({ message: 'Product already exists' })
45 |       }
46 | 
47 |       const product = await prisma.product.create({
48 |         data: {
49 |           name,
50 |           description,
51 |           price,
52 |           quantity
53 |         }
54 |       })
55 | 
56 |       return reply.status(201).send({
57 |         productId: product.id,
58 |         name: product.name,
59 |         description: product.description,
60 |         price: product.price,
61 |         quantity: product.quantity
62 |       })
63 |     }
64 |   )
65 | }
66 | 


--------------------------------------------------------------------------------
/idf/src/v1/product/get-all-product.ts:
--------------------------------------------------------------------------------
 1 | import { FastifyInstance } from 'fastify'
 2 | import { ZodTypeProvider } from 'fastify-type-provider-zod'
 3 | import { prisma } from '@/lib/prisma'
 4 | 
 5 | import { z } from 'zod'
 6 | 
 7 | export async function getAllProducts(app: FastifyInstance) {
 8 |   app.withTypeProvider<ZodTypeProvider>().get(
 9 |     '/api/v1/product/all',
10 |     {
11 |       schema: {
12 |         summary: 'Get all product',
13 |         tags: ['product'],
14 |         response: {
15 |           200: z.object({
16 |             products: z.array(
17 |               z.object({
18 |                 productId: z.number(),
19 |                 name: z.string(),
20 |                 description: z.string(),
21 |                 price: z.number(),
22 |                 quantity: z.number()
23 |               })
24 |             )
25 |           }),
26 |           404: z.object({
27 |             message: z.string()
28 |           })
29 |         }
30 |       }
31 |     },
32 |     async (request, reply) => {
33 |       const products = await prisma.product.findMany({
34 |         select: {
35 |           id: true,
36 |           name: true,
37 |           description: true,
38 |           price: true,
39 |           quantity: true
40 |         }
41 |       })
42 | 
43 |       if (products === null) {
44 |         return reply.status(404).send({ message: 'product not found' })
45 |       }
46 | 
47 |       return reply.send({
48 |         products: products.map(product => ({
49 |           productId: product.id,
50 |           name: product.name,
51 |           description: product.description,
52 |           price: product.price,
53 |           quantity: product.quantity
54 |         }))
55 |       })
56 |     }
57 |   )
58 | }
59 | 


--------------------------------------------------------------------------------
/idf/src/v1/routes.ts:
--------------------------------------------------------------------------------
 1 | import fastifySwagger from '@fastify/swagger'
 2 | import fastifySwaggerUi from '@fastify/swagger-ui'
 3 | import { FastifyInstance } from 'fastify'
 4 | import {
 5 |   jsonSchemaTransform,
 6 |   serializerCompiler,
 7 |   validatorCompiler
 8 | } from 'fastify-type-provider-zod'
 9 | import { createEvent } from './events/create-event'
10 | import { registerForEvent } from './attendees/register-for-event'
11 | import { getEvent } from './events/get-event'
12 | import { getAllEvents } from './events/get-all-events'
13 | import { getAttendeeBadge } from './attendees/get-attendee-badge'
14 | import { checkIn } from './check-ins/check-in'
15 | import { authenticateAttendee } from './auth/sessions'
16 | import { ZodError } from 'zod'
17 | import { getEventAttendeesByCorporation } from './events/get-event-attendees-by-corporation'
18 | import { EditAttendeeForEvent } from './attendees/edit-attendee-for-event'
19 | import { DeleteAttendeeForEvent } from './attendees/delete-attendee-for-event'
20 | import { deleteEvent } from './events/delete-event'
21 | import { createLeader } from './leader/create-leader'
22 | import { createCorporation } from './corporation/create-corporation'
23 | import { editCorporation } from './corporation/edit-corporation'
24 | import { getCorporation } from './corporation/get-corporation'
25 | import { deleteLeader } from './leader/delete-leader'
26 | import { getAllLeaders } from './leader/get-all-leaders'
27 | import { editLeader } from './leader/edit-leader'
28 | import { getAllProducts } from './product/get-all-product'
29 | import { createProduct } from './product/create-product'
30 | import { createOrder } from './order/create-order'
31 | import { getOrder } from './order/get-order'
32 | import { confirmPaymentOrder } from './order/confirm-payment-order'
33 | import { saveComprovantOrder } from './order/save-comprovant-order'
34 | import { cancelOrder } from './order/cancel-roder'
35 | import { getAllOrders } from './order/get-all-orders'
36 | 
37 | export async function appRoutes(app: FastifyInstance) {
38 |   app.register(fastifySwagger, {
39 |     swagger: {
40 |       consumes: ['application/json'],
41 |       produces: ['application/json'],
42 |       info: {
43 |         title: 'api-idf',
44 |         description:
45 |           'API do Instituto Desenhando o Futuro para gerenciamento de eventos e participantes.',
46 |         version: '1.0.0'
47 |       }
48 |     },
49 |     transform: jsonSchemaTransform
50 |   })
51 | 
52 |   app.register(fastifySwaggerUi, {
53 |     routePrefix: '/api/v1/docs'
54 |   })
55 | 
56 |   app.setValidatorCompiler(validatorCompiler)
57 |   app.setSerializerCompiler(serializerCompiler)
58 | 
59 |   app.register(createEvent)
60 |   app.register(deleteEvent)
61 |   app.register(registerForEvent)
62 |   app.register(EditAttendeeForEvent)
63 |   app.register(DeleteAttendeeForEvent)
64 |   app.register(getEvent)
65 |   app.register(getAllEvents)
66 |   app.register(getAttendeeBadge)
67 |   app.register(checkIn)
68 |   app.register(authenticateAttendee)
69 |   app.register(getEventAttendeesByCorporation)
70 |   app.register(createLeader)
71 |   app.register(getAllLeaders)
72 |   app.register(editLeader)
73 |   app.register(deleteLeader)
74 |   app.register(createCorporation)
75 |   app.register(getCorporation)
76 |   app.register(editCorporation)
77 |   app.register(createProduct)
78 |   app.register(getAllProducts)
79 |   app.register(createOrder)
80 |   app.register(getOrder)
81 |   app.register(getAllOrders)
82 |   app.register(confirmPaymentOrder)
83 |   app.register(saveComprovantOrder)
84 |   app.register(cancelOrder)
85 | 
86 |   app.setErrorHandler((error, _, reply) => {
87 |     if (error instanceof ZodError) {
88 |       return reply.status(400).send({
89 |         message: `Error during validation`,
90 |         errors: error.flatten().fieldErrors
91 |       })
92 |     }
93 |     return reply.status(500).send({
94 |       message: 'internal server error'
95 |     })
96 |   })
97 | }
98 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |     "private": true,
 3 |     "scripts": {
 4 |         "dev": "npm run development",
 5 |         "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
 6 |         "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
 7 |         "watch-poll": "npm run watch -- --watch-poll",
 8 |         "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
 9 |         "prod": "npm run production",
10 |         "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
11 |     },
12 |     "devDependencies": {
13 |         "axios": "^0.17",
14 |         "bootstrap": "^4.0.0",
15 |         "popper.js": "^1.12",
16 |         "cross-env": "^5.1",
17 |         "jquery": "^3.2",
18 |         "laravel-mix": "^2.0",
19 |         "lodash": "^4.17.4",
20 |         "vue": "^2.5.7"
21 |     }
22 | }
23 | 


--------------------------------------------------------------------------------
/phpunit.xml:
--------------------------------------------------------------------------------
 1 | <?xml version="1.0" encoding="UTF-8"?>
 2 | <phpunit backupGlobals="false"
 3 |          backupStaticAttributes="false"
 4 |          bootstrap="vendor/autoload.php"
 5 |          colors="true"
 6 |          convertErrorsToExceptions="true"
 7 |          convertNoticesToExceptions="true"
 8 |          convertWarningsToExceptions="true"
 9 |          processIsolation="false"
10 |          stopOnFailure="false">
11 |     <testsuites>
12 |         <testsuite name="Feature">
13 |             <directory suffix="Test.php">./tests/Feature</directory>
14 |         </testsuite>
15 | 
16 |         <testsuite name="Unit">
17 |             <directory suffix="Test.php">./tests/Unit</directory>
18 |         </testsuite>
19 |     </testsuites>
20 |     <filter>
21 |         <whitelist processUncoveredFilesFromWhitelist="true">
22 |             <directory suffix=".php">./app</directory>
23 |         </whitelist>
24 |     </filter>
25 |     <php>
26 |         <env name="APP_ENV" value="testing"/>
27 |         <env name="CACHE_DRIVER" value="array"/>
28 |         <env name="SESSION_DRIVER" value="array"/>
29 |         <env name="QUEUE_DRIVER" value="sync"/>
30 |     </php>
31 | </phpunit>
32 | 


--------------------------------------------------------------------------------
/public/.htaccess:
--------------------------------------------------------------------------------
 1 | <IfModule mod_rewrite.c>
 2 |     <IfModule mod_negotiation.c>
 3 |         Options -MultiViews -Indexes
 4 |     </IfModule>
 5 | 
 6 |     RewriteEngine On
 7 | 
 8 |     # Handle Authorization Header
 9 |     RewriteCond %{HTTP:Authorization} .
10 |     RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
11 | 
12 |     # Redirect Trailing Slashes If Not A Folder...
13 |     RewriteCond %{REQUEST_FILENAME} !-d
14 |     RewriteCond %{REQUEST_URI} (.+)/$
15 |     RewriteRule ^ %1 [L,R=301]
16 | 
17 |     # Handle Front Controller...
18 |     RewriteCond %{REQUEST_FILENAME} !-d
19 |     RewriteCond %{REQUEST_FILENAME} !-f
20 |     RewriteRule ^ index.php [L]
21 | </IfModule>
22 | 


--------------------------------------------------------------------------------
/public/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/josuearaujomoreira/back_teste_rallw/16c94dd30fda81091e42eacee48ce2aed45f39b8/public/favicon.ico


--------------------------------------------------------------------------------
/public/index.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | /**
 4 |  * Laravel - A PHP Framework For Web Artisans
 5 |  *
 6 |  * @package  Laravel
 7 |  * @author   Taylor Otwell <taylor@laravel.com>
 8 |  */
 9 | 
10 | define('LARAVEL_START', microtime(true));
11 | 
12 | /*
13 | |--------------------------------------------------------------------------
14 | | Register The Auto Loader
15 | |--------------------------------------------------------------------------
16 | |
17 | | Composer provides a convenient, automatically generated class loader for
18 | | our application. We just need to utilize it! We'll simply require it
19 | | into the script here so that we don't have to worry about manual
20 | | loading any of our classes later on. It feels great to relax.
21 | |
22 | */
23 | 
24 | require __DIR__.'/../vendor/autoload.php';
25 | 
26 | /*
27 | |--------------------------------------------------------------------------
28 | | Turn On The Lights
29 | |--------------------------------------------------------------------------
30 | |
31 | | We need to illuminate PHP development, so let us turn on the lights.
32 | | This bootstraps the framework and gets it ready for use, then it
33 | | will load up this application so that we can run it and send
34 | | the responses back to the browser and delight our users.
35 | |
36 | */
37 | 
38 | $app = require_once __DIR__.'/../bootstrap/app.php';
39 | 
40 | /*
41 | |--------------------------------------------------------------------------
42 | | Run The Application
43 | |--------------------------------------------------------------------------
44 | |
45 | | Once we have the application, we can handle the incoming request
46 | | through the kernel, and send the associated response back to
47 | | the client's browser allowing them to enjoy the creative
48 | | and wonderful application we have prepared for them.
49 | |
50 | */
51 | 
52 | $kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
53 | 
54 | $response = $kernel->handle(
55 |     $request = Illuminate\Http\Request::capture()
56 | );
57 | 
58 | $response->send();
59 | 
60 | $kernel->terminate($request, $response);
61 | 


--------------------------------------------------------------------------------
/public/robots.txt:
--------------------------------------------------------------------------------
1 | User-agent: *
2 | Disallow:
3 | 


--------------------------------------------------------------------------------
/public/web.config:
--------------------------------------------------------------------------------
 1 | <configuration>
 2 |   <system.webServer>
 3 |     <rewrite>
 4 |       <rules>
 5 |         <rule name="Imported Rule 1" stopProcessing="true">
 6 |           <match url="^(.*)/
quot; ignoreCase="false" />
 7 |           <conditions>
 8 |             <add input="{REQUEST_FILENAME}" matchType="IsDirectory" ignoreCase="false" negate="true" />
 9 |           </conditions>
10 |           <action type="Redirect" redirectType="Permanent" url="/{R:1}" />
11 |         </rule>
12 |         <rule name="Imported Rule 2" stopProcessing="true">
13 |           <match url="^" ignoreCase="false" />
14 |           <conditions>
15 |             <add input="{REQUEST_FILENAME}" matchType="IsDirectory" ignoreCase="false" negate="true" />
16 |             <add input="{REQUEST_FILENAME}" matchType="IsFile" ignoreCase="false" negate="true" />
17 |           </conditions>
18 |           <action type="Rewrite" url="index.php" />
19 |         </rule>
20 |       </rules>
21 |     </rewrite>
22 |   </system.webServer>
23 | </configuration>
24 | 


--------------------------------------------------------------------------------
/resources/assets/js/app.js:
--------------------------------------------------------------------------------
 1 | 
 2 | /**
 3 |  * First we will load all of this project's JavaScript dependencies which
 4 |  * includes Vue and other libraries. It is a great starting point when
 5 |  * building robust, powerful web applications using Vue and Laravel.
 6 |  */
 7 | 
 8 | require('./bootstrap');
 9 | 
10 | window.Vue = require('vue');
11 | 
12 | /**
13 |  * Next, we will create a fresh Vue application instance and attach it to
14 |  * the page. Then, you may begin adding components to this application
15 |  * or customize the JavaScript scaffolding to fit your unique needs.
16 |  */
17 | 
18 | Vue.component('example-component', require('./components/ExampleComponent.vue'));
19 | 
20 | const app = new Vue({
21 |     el: '#app'
22 | });
23 | 


--------------------------------------------------------------------------------
/resources/assets/js/bootstrap.js:
--------------------------------------------------------------------------------
 1 | 
 2 | window._ = require('lodash');
 3 | window.Popper = require('popper.js').default;
 4 | 
 5 | /**
 6 |  * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 7 |  * for JavaScript based Bootstrap features such as modals and tabs. This
 8 |  * code may be modified to fit the specific needs of your application.
 9 |  */
10 | 
11 | try {
12 |     window.$ = window.jQuery = require('jquery');
13 | 
14 |     require('bootstrap');
15 | } catch (e) {}
16 | 
17 | /**
18 |  * We'll load the axios HTTP library which allows us to easily issue requests
19 |  * to our Laravel back-end. This library automatically handles sending the
20 |  * CSRF token as a header based on the value of the "XSRF" token cookie.
21 |  */
22 | 
23 | window.axios = require('axios');
24 | 
25 | window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
26 | 
27 | /**
28 |  * Next we will register the CSRF Token as a common header with Axios so that
29 |  * all outgoing HTTP requests automatically have it attached. This is just
30 |  * a simple convenience so we don't have to attach every token manually.
31 |  */
32 | 
33 | let token = document.head.querySelector('meta[name="csrf-token"]');
34 | 
35 | if (token) {
36 |     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
37 | } else {
38 |     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
39 | }
40 | 
41 | /**
42 |  * Echo exposes an expressive API for subscribing to channels and listening
43 |  * for events that are broadcast by Laravel. Echo and event broadcasting
44 |  * allows your team to easily build robust real-time web applications.
45 |  */
46 | 
47 | // import Echo from 'laravel-echo'
48 | 
49 | // window.Pusher = require('pusher-js');
50 | 
51 | // window.Echo = new Echo({
52 | //     broadcaster: 'pusher',
53 | //     key: process.env.MIX_PUSHER_APP_KEY,
54 | //     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
55 | //     encrypted: true
56 | // });
57 | 


--------------------------------------------------------------------------------
/resources/assets/js/components/ExampleComponent.vue:
--------------------------------------------------------------------------------
 1 | <template>
 2 |     <div class="container">
 3 |         <div class="row justify-content-center">
 4 |             <div class="col-md-8">
 5 |                 <div class="card card-default">
 6 |                     <div class="card-header">Example Component</div>
 7 | 
 8 |                     <div class="card-body">
 9 |                         I'm an example component.
10 |                     </div>
11 |                 </div>
12 |             </div>
13 |         </div>
14 |     </div>
15 | </template>
16 | 
17 | <script>
18 |     export default {
19 |         mounted() {
20 |             console.log('Component mounted.')
21 |         }
22 |     }
23 | </script>
24 | 


--------------------------------------------------------------------------------
/resources/assets/sass/_variables.scss:
--------------------------------------------------------------------------------
 1 | 
 2 | // Body
 3 | $body-bg: #f5f8fa;
 4 | 
 5 | // Typography
 6 | $font-family-sans-serif: "Raleway", sans-serif;
 7 | $font-size-base: 0.9rem;
 8 | $line-height-base: 1.6;
 9 | $text-color: #636b6f;
10 | 
11 | // Navbar
12 | $navbar-default-bg: #fff;
13 | 
14 | // Buttons
15 | $btn-default-color: $text-color;
16 | 
17 | // Panels
18 | $panel-default-heading-bg: #fff;
19 | 


--------------------------------------------------------------------------------
/resources/assets/sass/app.scss:
--------------------------------------------------------------------------------
 1 | 
 2 | // Fonts
 3 | @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,600");
 4 | 
 5 | // Variables
 6 | @import "variables";
 7 | 
 8 | // Bootstrap
 9 | @import '~bootstrap/scss/bootstrap';
10 | 
11 | .navbar-laravel {
12 |   background-color: #fff;
13 |   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
14 | }
15 | 


--------------------------------------------------------------------------------
/resources/lang/en/auth.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Authentication Language Lines
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | The following language lines are used during authentication for various
11 |     | messages that we need to display to the user. You are free to modify
12 |     | these language lines according to your application's requirements.
13 |     |
14 |     */
15 | 
16 |     'failed' => 'These credentials do not match our records.',
17 |     'throttle' => 'Too many login attempts. Please try again in :seconds seconds.',
18 | 
19 | ];
20 | 


--------------------------------------------------------------------------------
/resources/lang/en/pagination.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Pagination Language Lines
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | The following language lines are used by the paginator library to build
11 |     | the simple pagination links. You are free to change them to anything
12 |     | you want to customize your views to better match your application.
13 |     |
14 |     */
15 | 
16 |     'previous' => '&laquo; Previous',
17 |     'next' => 'Next &raquo;',
18 | 
19 | ];
20 | 


--------------------------------------------------------------------------------
/resources/lang/en/passwords.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | return [
 4 | 
 5 |     /*
 6 |     |--------------------------------------------------------------------------
 7 |     | Password Reset Language Lines
 8 |     |--------------------------------------------------------------------------
 9 |     |
10 |     | The following language lines are the default lines which match reasons
11 |     | that are given by the password broker for a password update attempt
12 |     | has failed, such as for an invalid token or invalid new password.
13 |     |
14 |     */
15 | 
16 |     'password' => 'Passwords must be at least six characters and match the confirmation.',
17 |     'reset' => 'Your password has been reset!',
18 |     'sent' => 'We have e-mailed your password reset link!',
19 |     'token' => 'This password reset token is invalid.',
20 |     'user' => "We can't find a user with that e-mail address.",
21 | 
22 | ];
23 | 


--------------------------------------------------------------------------------
/resources/lang/en/validation.php:
--------------------------------------------------------------------------------
  1 | <?php
  2 | 
  3 | return [
  4 | 
  5 |     /*
  6 |     |--------------------------------------------------------------------------
  7 |     | Validation Language Lines
  8 |     |--------------------------------------------------------------------------
  9 |     |
 10 |     | The following language lines contain the default error messages used by
 11 |     | the validator class. Some of these rules have multiple versions such
 12 |     | as the size rules. Feel free to tweak each of these messages here.
 13 |     |
 14 |     */
 15 | 
 16 |     'accepted'             => 'The :attribute must be accepted.',
 17 |     'active_url'           => 'The :attribute is not a valid URL.',
 18 |     'after'                => 'The :attribute must be a date after :date.',
 19 |     'after_or_equal'       => 'The :attribute must be a date after or equal to :date.',
 20 |     'alpha'                => 'The :attribute may only contain letters.',
 21 |     'alpha_dash'           => 'The :attribute may only contain letters, numbers, and dashes.',
 22 |     'alpha_num'            => 'The :attribute may only contain letters and numbers.',
 23 |     'array'                => 'The :attribute must be an array.',
 24 |     'before'               => 'The :attribute must be a date before :date.',
 25 |     'before_or_equal'      => 'The :attribute must be a date before or equal to :date.',
 26 |     'between'              => [
 27 |         'numeric' => 'The :attribute must be between :min and :max.',
 28 |         'file'    => 'The :attribute must be between :min and :max kilobytes.',
 29 |         'string'  => 'The :attribute must be between :min and :max characters.',
 30 |         'array'   => 'The :attribute must have between :min and :max items.',
 31 |     ],
 32 |     'boolean'              => 'The :attribute field must be true or false.',
 33 |     'confirmed'            => 'The :attribute confirmation does not match.',
 34 |     'date'                 => 'The :attribute is not a valid date.',
 35 |     'date_format'          => 'The :attribute does not match the format :format.',
 36 |     'different'            => 'The :attribute and :other must be different.',
 37 |     'digits'               => 'The :attribute must be :digits digits.',
 38 |     'digits_between'       => 'The :attribute must be between :min and :max digits.',
 39 |     'dimensions'           => 'The :attribute has invalid image dimensions.',
 40 |     'distinct'             => 'The :attribute field has a duplicate value.',
 41 |     'email'                => 'The :attribute must be a valid email address.',
 42 |     'exists'               => 'The selected :attribute is invalid.',
 43 |     'file'                 => 'The :attribute must be a file.',
 44 |     'filled'               => 'The :attribute field must have a value.',
 45 |     'image'                => 'The :attribute must be an image.',
 46 |     'in'                   => 'The selected :attribute is invalid.',
 47 |     'in_array'             => 'The :attribute field does not exist in :other.',
 48 |     'integer'              => 'The :attribute must be an integer.',
 49 |     'ip'                   => 'The :attribute must be a valid IP address.',
 50 |     'ipv4'                 => 'The :attribute must be a valid IPv4 address.',
 51 |     'ipv6'                 => 'The :attribute must be a valid IPv6 address.',
 52 |     'json'                 => 'The :attribute must be a valid JSON string.',
 53 |     'max'                  => [
 54 |         'numeric' => 'The :attribute may not be greater than :max.',
 55 |         'file'    => 'The :attribute may not be greater than :max kilobytes.',
 56 |         'string'  => 'The :attribute may not be greater than :max characters.',
 57 |         'array'   => 'The :attribute may not have more than :max items.',
 58 |     ],
 59 |     'mimes'                => 'The :attribute must be a file of type: :values.',
 60 |     'mimetypes'            => 'The :attribute must be a file of type: :values.',
 61 |     'min'                  => [
 62 |         'numeric' => 'The :attribute must be at least :min.',
 63 |         'file'    => 'The :attribute must be at least :min kilobytes.',
 64 |         'string'  => 'The :attribute must be at least :min characters.',
 65 |         'array'   => 'The :attribute must have at least :min items.',
 66 |     ],
 67 |     'not_in'               => 'The selected :attribute is invalid.',
 68 |     'numeric'              => 'The :attribute must be a number.',
 69 |     'present'              => 'The :attribute field must be present.',
 70 |     'regex'                => 'The :attribute format is invalid.',
 71 |     'required'             => 'The :attribute field is required.',
 72 |     'required_if'          => 'The :attribute field is required when :other is :value.',
 73 |     'required_unless'      => 'The :attribute field is required unless :other is in :values.',
 74 |     'required_with'        => 'The :attribute field is required when :values is present.',
 75 |     'required_with_all'    => 'The :attribute field is required when :values is present.',
 76 |     'required_without'     => 'The :attribute field is required when :values is not present.',
 77 |     'required_without_all' => 'The :attribute field is required when none of :values are present.',
 78 |     'same'                 => 'The :attribute and :other must match.',
 79 |     'size'                 => [
 80 |         'numeric' => 'The :attribute must be :size.',
 81 |         'file'    => 'The :attribute must be :size kilobytes.',
 82 |         'string'  => 'The :attribute must be :size characters.',
 83 |         'array'   => 'The :attribute must contain :size items.',
 84 |     ],
 85 |     'string'               => 'The :attribute must be a string.',
 86 |     'timezone'             => 'The :attribute must be a valid zone.',
 87 |     'unique'               => 'The :attribute has already been taken.',
 88 |     'uploaded'             => 'The :attribute failed to upload.',
 89 |     'url'                  => 'The :attribute format is invalid.',
 90 | 
 91 |     /*
 92 |     |--------------------------------------------------------------------------
 93 |     | Custom Validation Language Lines
 94 |     |--------------------------------------------------------------------------
 95 |     |
 96 |     | Here you may specify custom validation messages for attributes using the
 97 |     | convention "attribute.rule" to name the lines. This makes it quick to
 98 |     | specify a specific custom language line for a given attribute rule.
 99 |     |
100 |     */
101 | 
102 |     'custom' => [
103 |         'attribute-name' => [
104 |             'rule-name' => 'custom-message',
105 |         ],
106 |     ],
107 | 
108 |     /*
109 |     |--------------------------------------------------------------------------
110 |     | Custom Validation Attributes
111 |     |--------------------------------------------------------------------------
112 |     |
113 |     | The following language lines are used to swap attribute place-holders
114 |     | with something more reader friendly such as E-Mail Address instead
115 |     | of "email". This simply helps us make messages a little cleaner.
116 |     |
117 |     */
118 | 
119 |     'attributes' => [],
120 | 
121 | ];
122 | 


--------------------------------------------------------------------------------
/resources/views/welcome.blade.php:
--------------------------------------------------------------------------------
 1 | <!doctype html>
 2 | <html lang="{{ app()->getLocale() }}">
 3 |     <head>
 4 |         <meta charset="utf-8">
 5 |         <meta http-equiv="X-UA-Compatible" content="IE=edge">
 6 |         <meta name="viewport" content="width=device-width, initial-scale=1">
 7 | 
 8 |         <title>Laravel</title>
 9 | 
10 |         <!-- Fonts -->
11 |         <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
12 | 
13 |         <!-- Styles -->
14 |         <style>
15 |             html, body {
16 |                 background-color: #fff;
17 |                 color: #636b6f;
18 |                 font-family: 'Raleway', sans-serif;
19 |                 font-weight: 100;
20 |                 height: 100vh;
21 |                 margin: 0;
22 |             }
23 | 
24 |             .full-height {
25 |                 height: 100vh;
26 |             }
27 | 
28 |             .flex-center {
29 |                 align-items: center;
30 |                 display: flex;
31 |                 justify-content: center;
32 |             }
33 | 
34 |             .position-ref {
35 |                 position: relative;
36 |             }
37 | 
38 |             .top-right {
39 |                 position: absolute;
40 |                 right: 10px;
41 |                 top: 18px;
42 |             }
43 | 
44 |             .content {
45 |                 text-align: center;
46 |             }
47 | 
48 |             .title {
49 |                 font-size: 84px;
50 |             }
51 | 
52 |             .links > a {
53 |                 color: #636b6f;
54 |                 padding: 0 25px;
55 |                 font-size: 12px;
56 |                 font-weight: 600;
57 |                 letter-spacing: .1rem;
58 |                 text-decoration: none;
59 |                 text-transform: uppercase;
60 |             }
61 | 
62 |             .m-b-md {
63 |                 margin-bottom: 30px;
64 |             }
65 |         </style>
66 |     </head>
67 |     <body>
68 |         <div class="flex-center position-ref full-height">
69 |             @if (Route::has('login'))
70 |                 <div class="top-right links">
71 |                     @auth
72 |                         <a href="{{ url('/home') }}">Home</a>
73 |                     @else
74 |                         <a href="{{ route('login') }}">Login</a>
75 |                         <a href="{{ route('register') }}">Register</a>
76 |                     @endauth
77 |                 </div>
78 |             @endif
79 | 
80 |             <div class="content">
81 |                 <div class="title m-b-md">
82 |                     Laravel
83 |                 </div>
84 | 
85 |                 <div class="links">
86 |                     <a href="https://laravel.com/docs">Documentation</a>
87 |                     <a href="https://laracasts.com">Laracasts</a>
88 |                     <a href="https://laravel-news.com">News</a>
89 |                     <a href="https://forge.laravel.com">Forge</a>
90 |                     <a href="https://github.com/laravel/laravel">GitHub</a>
91 |                 </div>
92 |             </div>
93 |         </div>
94 |     </body>
95 | </html>
96 | 


--------------------------------------------------------------------------------
/routes/api.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Illuminate\Http\Request;
 4 | 
 5 | /*
 6 | |--------------------------------------------------------------------------
 7 | | API Routes
 8 | |--------------------------------------------------------------------------
 9 | |
10 | | Here is where you can register API routes for your application. These
11 | | routes are loaded by the RouteServiceProvider within a group which
12 | | is assigned the "api" middleware group. Enjoy building your API!
13 | |
14 | */
15 | 
16 | Route::middleware('auth:api')->get('/user', function (Request $request) {
17 |     return $request->user();
18 | });
19 | 


--------------------------------------------------------------------------------
/routes/channels.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | /*
 4 | |--------------------------------------------------------------------------
 5 | | Broadcast Channels
 6 | |--------------------------------------------------------------------------
 7 | |
 8 | | Here you may register all of the event broadcasting channels that your
 9 | | application supports. The given channel authorization callbacks are
10 | | used to check if an authenticated user can listen to the channel.
11 | |
12 | */
13 | 
14 | Broadcast::channel('App.User.{id}', function ($user, $id) {
15 |     return (int) $user->id === (int) $id;
16 | });
17 | 


--------------------------------------------------------------------------------
/routes/console.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | use Illuminate\Foundation\Inspiring;
 4 | 
 5 | /*
 6 | |--------------------------------------------------------------------------
 7 | | Console Routes
 8 | |--------------------------------------------------------------------------
 9 | |
10 | | This file is where you may define all of your Closure based console
11 | | commands. Each Closure is bound to a command instance allowing a
12 | | simple approach to interacting with each command's IO methods.
13 | |
14 | */
15 | 
16 | Artisan::command('inspire', function () {
17 |     $this->comment(Inspiring::quote());
18 | })->describe('Display an inspiring quote');
19 | 


--------------------------------------------------------------------------------
/routes/web.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | /*
 4 | |--------------------------------------------------------------------------
 5 | | Web Routes
 6 | |--------------------------------------------------------------------------
 7 | |
 8 | | Here is where you can register web routes for your application. These
 9 | | routes are loaded by the RouteServiceProvider within a group which
10 | | contains the "web" middleware group. Now create something great!
11 | |
12 | */
13 | 
14 | Route::get('/', function () {
15 |     return view('welcome');
16 | });
17 | 


--------------------------------------------------------------------------------
/server.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | /**
 4 |  * Laravel - A PHP Framework For Web Artisans
 5 |  *
 6 |  * @package  Laravel
 7 |  * @author   Taylor Otwell <taylor@laravel.com>
 8 |  */
 9 | 
10 | $uri = urldecode(
11 |     parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
12 | );
13 | 
14 | // This file allows us to emulate Apache's "mod_rewrite" functionality from the
15 | // built-in PHP web server. This provides a convenient way to test a Laravel
16 | // application without having installed a "real" web server software here.
17 | if ($uri !== '/' && file_exists(__DIR__.'/public'.$uri)) {
18 |     return false;
19 | }
20 | 
21 | require_once __DIR__.'/public/index.php';
22 | 


--------------------------------------------------------------------------------
/storage/app/.gitignore:
--------------------------------------------------------------------------------
1 | *
2 | !public/
3 | !.gitignore
4 | 


--------------------------------------------------------------------------------
/storage/app/public/.gitignore:
--------------------------------------------------------------------------------
1 | *
2 | !.gitignore
3 | 


--------------------------------------------------------------------------------
/storage/framework/.gitignore:
--------------------------------------------------------------------------------
1 | config.php
2 | routes.php
3 | schedule-*
4 | compiled.php
5 | services.json
6 | events.scanned.php
7 | routes.scanned.php
8 | down
9 | 


--------------------------------------------------------------------------------
/storage/framework/cache/.gitignore:
--------------------------------------------------------------------------------
1 | *
2 | !.gitignore
3 | 


--------------------------------------------------------------------------------
/storage/framework/sessions/.gitignore:
--------------------------------------------------------------------------------
1 | *
2 | !.gitignore
3 | 


--------------------------------------------------------------------------------
/storage/framework/testing/.gitignore:
--------------------------------------------------------------------------------
1 | *
2 | !.gitignore
3 | 


--------------------------------------------------------------------------------
/storage/framework/views/.gitignore:
--------------------------------------------------------------------------------
1 | *
2 | !.gitignore
3 | 


--------------------------------------------------------------------------------
/storage/logs/.gitignore:
--------------------------------------------------------------------------------
1 | *
2 | !.gitignore
3 | 


--------------------------------------------------------------------------------
/tests/CreatesApplication.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace Tests;
 4 | 
 5 | use Illuminate\Support\Facades\Hash;
 6 | use Illuminate\Contracts\Console\Kernel;
 7 | 
 8 | trait CreatesApplication
 9 | {
10 |     /**
11 |      * Creates the application.
12 |      *
13 |      * @return \Illuminate\Foundation\Application
14 |      */
15 |     public function createApplication()
16 |     {
17 |         $app = require __DIR__.'/../bootstrap/app.php';
18 | 
19 |         $app->make(Kernel::class)->bootstrap();
20 | 
21 |         Hash::driver('bcrypt')->setRounds(4);
22 | 
23 |         return $app;
24 |     }
25 | }
26 | 


--------------------------------------------------------------------------------
/tests/Feature/ExampleTest.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace Tests\Feature;
 4 | 
 5 | use Tests\TestCase;
 6 | use Illuminate\Foundation\Testing\RefreshDatabase;
 7 | 
 8 | class ExampleTest extends TestCase
 9 | {
10 |     /**
11 |      * A basic test example.
12 |      *
13 |      * @return void
14 |      */
15 |     public function testBasicTest()
16 |     {
17 |         $response = $this->get('/');
18 | 
19 |         $response->assertStatus(200);
20 |     }
21 | }
22 | 


--------------------------------------------------------------------------------
/tests/TestCase.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace Tests;
 4 | 
 5 | use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
 6 | 
 7 | abstract class TestCase extends BaseTestCase
 8 | {
 9 |     use CreatesApplication;
10 | }
11 | 


--------------------------------------------------------------------------------
/tests/Unit/ExampleTest.php:
--------------------------------------------------------------------------------
 1 | <?php
 2 | 
 3 | namespace Tests\Unit;
 4 | 
 5 | use Tests\TestCase;
 6 | use Illuminate\Foundation\Testing\RefreshDatabase;
 7 | 
 8 | class ExampleTest extends TestCase
 9 | {
10 |     /**
11 |      * A basic test example.
12 |      *
13 |      * @return void
14 |      */
15 |     public function testBasicTest()
16 |     {
17 |         $this->assertTrue(true);
18 |     }
19 | }
20 | 


--------------------------------------------------------------------------------
/webpack.mix.js:
--------------------------------------------------------------------------------
 1 | let mix = require('laravel-mix');
 2 | 
 3 | /*
 4 |  |--------------------------------------------------------------------------
 5 |  | Mix Asset Management
 6 |  |--------------------------------------------------------------------------
 7 |  |
 8 |  | Mix provides a clean, fluent API for defining some Webpack build steps
 9 |  | for your Laravel application. By default, we are compiling the Sass
10 |  | file for the application as well as bundling up all the JS files.
11 |  |
12 |  */
13 | 
14 | mix.js('resources/assets/js/app.js', 'public/js')
15 |    .sass('resources/assets/sass/app.scss', 'public/css');
16 | 


--------------------------------------------------------------------------------
