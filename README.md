# MERN - Egzersiz Takip Projesi

### Giriş
+ Bu proje, MERN mimarisini pekiştirme amaçlı olarak oluşturulmuştur.

## Kurulum

### 1. Projeyi klonlayın
```bash
git clone https://github.com/erhanurgun/MERN01-workout-project.git workout-project
```

### 2. .env dosyasını oluşturun
```bash
cd workout-project && cd backend
```
```bash
cp .env.example .env
```

### 3. NPM paketlerini yükleyin
```bash
npm install
```

### 4. MongoDB Atlas bağlantı adresini `.env` dosyasına ekleyin
##### Bunun için aşağıda anlatılan adımları takip ediniz:
1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) adresine gidin ve kaydolun.
2. Üye olduktan sonra açılan sayfada aşağıdaki gibi bir ekran göreceksiniz. Görseldeki seçimleri yapın ve `Finish` butonuna tıklayın.
![MongoDB Atlas](/_/img/ss1.png)
3. Bir sonraki ekranda sadece `FREE` seçeneğini seçin ve `Create` butonuna tıklayın.
![MongoDB Atlas](/_/img/ss2.png)
4. Bir sonraki ekranda **QuickStart** altında ki **Data Services** alanına yönlendirileceksiniz. Burada `Username` ve `Password` alanlarını doldurun ve `Create User` butonuna tıklayın. ( Bu bilgileri bir yere not alın. )
![MongoDB Atlas](/_/img/ss3.png)
5. Daha sonra aynı alanda, en altta ki `Finish and Close` butonuna ardından da `Go to Overview` butonuna tıklayın.
![MongoDB Atlas](/_/img/ss4.png)
6. Yönlendirildiğiniz sayfada, `Connect` butonuna ve ardından açılan modal'da `Compass` alanına tıklayın.
![MongoDB Atlas](/_/img/ss5.png)
7. Açılan sayfada, `I don't have Compass` alanına tıklayın ve işlemleri takip ederek programı indirip kurulumunu yapınız. ( Eğer bilgisayarınızda MongoDB Compass yüklü ise `I have Compass` alanına tıklayın ve gerekli adımları takip edin. )
![MongoDB Atlas](/_/img/ss6.png)
8. Bir sonraki sayfa da yine adımları takip ederek veritabanı bağlantısını tamamlayın. ( Bu alanda gösterilen 2. resimdeki veritabanı yapılandırma işlemini yapmasanız dahi atlas otomatik olarak yapacaktır. )
![MongoDB Atlas](/_/img/ss7.png)
![MongoDB Atlas](/_/img/ss8.png)
9. Daha sonra mevcut sayfada `Copy` butonuna tıklayın ve `.env` dosyasındaki `DB_URL` alanına yapıştırın. ( `Username` ve `Password` alanlarını da kopyalayıp `.env` dosyasındaki ilgili alanlara yapıştırın. )
10. Son olarak `DB_URL` 'nin sonuna `dbName?retryWrites=true&w=majority` ekleyin. ( Bu işlemi yapmazsanız, bağlantıda sorun yaşayabilirsiniz. )
```bash
# Örnek:
DB_URL=mongodb+srv://erhanurgun:ufjcWOACZ@mernapp.ykuw3qz.mongodb.net/urgunsoft?retryWrites=true&w=majority
```
- `dbName` alanını boş bırakabilirsiniz. ( eğer burayı boş bırakırsanız, **MongoDB Atlas** otomatik olarak `test` isimli bir veritabanı oluşturacaktır. )

### 5. .env dosyasını düzenleyin
```bash
DB_URL=     # MongoDB bağlantı adresi.
SECRET=     # JWT için gerekli gizli anahtar. ( Herhangi bir şey olabilir. örn: OIBxuAHu###UrgunSoft###CU9VayJ$P4 )
PORT=       # Backend için kullanılacak port numarası.
```

## Kullanım

### Local Ortamda Çalıştırmadan Önce:

#### 1. Projeyi çalıştırmak için aşağıdaki komutları çalıştırınız
```bash
# Backend için;
cd backend && npm run dev
```
```bash
# Frontend için;
cd frontend && npm start
```

#### 2. Tarayıcıdan aşağıdaki adrese gidiniz
```bash
http://localhost:3000
# ya da
http://node.test
```
+ `node.test` adresini kullanabilmek için bunu `hosts` dosyasına eklemeniz gerekmektedir.
+ Aşağıdaki gibi bir ekran göreceksiniz. Kaydolmak için `Kaydol` butonuna tıklayın.
![Web App](/_/img/ss10.png)
+ Bu alanda `kullanıcı adı` ve `şifre` alanlarını doldurup bir kullanıcı oluşturun.
![Web App](/_/img/ss11.png)
+ Bu ekranı gördüğünüzde artık kullanmaya başlayabilirsiniz.
![Web App](/_/img/ss12.1.png)
+ Mobil cihazlarda da aynı şekilde kullanabilirsiniz.
- ![Web App](/_/img/ss13.png)

##### Panel Kullanımı
+ Örnek olarak bu tarz bir kullanıcı oluşturabilirsiniz. Daha sonra bu kullanıcı ile giriş yapabilirsiniz.
```bash
# Demo Kullanıcı:
E-Posta: client@urgun.xyz
Şifre..: iH&@hNuj&D6DFZ&K
```

#### 3. Postman ile API'yi test etmek için aşağıdaki adrese gidiniz
+ Önce `./_/json/postman_collection.json` dosyasını `Postman` programına import edin. ( `API | MERN Workout App` isimli bir `Collection` oluşacaktır.)
![Postman](/_/img/ss14.png)
+ Daha sonra `./_/json/postman_environment.json` dosyasını `Postman` programına import edin. Ardından şekildeki gibi seçili duruma getirin. ( `.ENV - RESTful API | Workout App` isimli bir `Environment` oluşacaktır. )
![Postman](/_/img/ss15.png)
+ Environtment için gerekli ayarları yaptıktan sonra, `kullanıcı adı` ve `şifre` alanlarını doldurup giriş yapın.
![Postman](/_/img/ss16.png)
+ Giriş işlemini yaptıktan sonra `JSON` olarak dönen ilgili **token** bilgisini **kopyalayıp** `environtment` alanında ki `TOKEN` alanına yapıştırın. Diğer alanları da şekildeki gibi doldurun.
![Postman](/_/img/ss17.png)
+ Bazen import işleminde `TOKEN` kısmında sorun oluşabiliyor. Aşağıdaki gibi kontrol sağlayabilirsiniz.
![Postman](/_/img/ss18.png)
+ Artık API'yi kullanmaya başlayabilirsiniz.

#### 4. Swagger ile API'yi test etmek için aşağıdaki adrese gidiniz
```bash
# API Dökümantasyonu için;
http://localhost:3000/api/v1/docs
# ya da
http://node.test/api/v1/docs
```
+ `node.test` adresini kullanabilmek için bunu `hosts` dosyasına eklemeniz gerekmektedir.
+ Dökümantasyon sayfası aşağıdaki gibi olacaktır.
![Swagger](/_/img/ss19.png)

## Destek
+ [İletişim](https://erhanurgun.com.tr) iletişim sayfasından benimle iletişime geçebilirsiniz.

## Kaynaklar

### Kullanılan Paketler

##### Backend için;
+ [Node.js](https://nodejs.org/tr/)
+ [Bcrypt](https://www.npmjs.com/package/bcrypt)
+ [Dotenv](https://www.npmjs.com/package/dotenv)
+ [Express](https://www.npmjs.com/package/express)
+ [Express Load](https://www.npmjs.com/package/express-load)
+ [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
+ [Mongoose](https://www.npmjs.com/package/mongoose)
+ [Nodemon](https://www.npmjs.com/package/nodemon)
+ [Validator](https://www.npmjs.com/package/validator)

##### Frontend için;
+ [Date Fns](https://date-fns.org/)
+ [Http Proxy Middleware](https://www.npmjs.com/package/http-proxy-middleware)
+ [Mongoose](https://www.npmjs.com/package/mongoose)
+ [React](https://reactjs.org/)
+ [React Dom](https://www.npmjs.com/package/react-dom)
+ [React Router Dom](https://www.npmjs.com/package/react-router-dom)
+ [React Scripts](https://www.npmjs.com/package/react-scripts)
+ [Web Vitals](https://www.npmjs.com/package/web-vitals)

### Faydalanılan Diğer Kaynaklar
+ [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Dosya Yapısı
```
└── + _
│   └── + img
│   │   │ - ss*.png
│   │
│   └── + json
│       │ - postman_collection.json
│       │ - postman_environment.json
│
└── + backend
│   └── + controllers
│   │   │ - userController.js
│   │   │ - workoutController.js
│   │   
│   └── + middlewares
│   │   │ - requireAuth.js
│   │
│   └── + models
│   │   │ - userModel.js
│   │   │ - workoutModel.js
│   │
│   └── + routes
│   │   │ - user.js
│   │   │ - workout.js
│   │
│   │ - .env.example
│   │ - .gitignore
│   │ - package.json
│   │ - server.js
│
└── + frontend
│   └── + public/*
│   │
│   └── + src
│   │   └── + components
│   │   │   │ - Navbar.js
│   │   │   │ - WorkoutDetails.js
│   │   │   │ - WorkoutForm.js
│   │   │
│   │   └── + context
│   │   │   │ - AuthContext.js
│   │   │   │ - WorkoutContext.js
│   │   │
│   │   └── + hooks
│   │   │   │ - useAuthContext.js
│   │   │   │ - useLogin.js
│   │   │   │ - useLogout.js
│   │   │   │ - useSignup.js
│   │   │   │ - useWorkoutContext.js
│   │   │
│   │   └── + pages
│   │   │   │ - Home.js
│   │   │   │ - Login.js
│   │   │   │ - Signup.js
│   │   │
│   │   │ - App.js
│   │   │ - index.css
│   │   │ - index.js
│   │
│   │ - .gitignore
│   │ - package.json
│   
│ - .gitignore
│ - README.md
.
.
.
```

Daha fazlası için [https://urgun.com.tr](https://urgun.com.tr) websitemizi ziyaret edebilirsiniz...
