---
template: BlogPost
path: /blog/api-php-untuk-wilayah-indonesia
date: 2021-02-18T15:39:41.652Z
title: API php untuk wilayah Indonesia
metaDescription: >-
  API PHP untuk mengambil data Provinsi, Kota/Kabupaten, Kecamatan, Kelurahan
  dari website BPS, tersedia dalam bentuk SQL. CSV dan JSON. jika anda
  menggunakan laravel atau framework yang support dengan composer anda bisa
  install juga paket composernya.
metaKeyword: >-
  api,php,indonesia,region,bps,sdk,wilayah,composer,package,paket,provinsi,kota,kabupaten,kecamatan,kelurahan,kodepos,
tags: 'API,PHP,Composer,Wilayah Indonesia,BPS,Laravel'
thumbnail: /images/blog/api-php-untuk-wilayah-indonesia.png
---
Pada artikel ini saya akan membahas sebuah paket composer yang bisa anda gunakan untuk scraping data atau bisa dibilang untuk mendapatkan data wilayah indonesia yang mana sumber data nya berasal dari website [BPS](https://bps.go.id/) .

Paket ini support dan bisa digunakan dengan Laravel atau framework lain yang support dengan composer. Dengan paket ini anda bisa mendapatkan data Provinsi, Kota/Kabupaten, Kecamatan, Kelurahan dan kode pos. ada 2 jenis data yang tersedia dalam paket [Indonesia Regions PHP Client](https://github.com/dekiakbar/indonesia-regions-php-client) , yaitu :

* Data Offline, dalam format : SQL, JSON, dan CSV.
* Data Online / Realtime dengan scraping data langsung ke website [BPS](https://bps.go.id/) .

#### Installasi Paket

untuk menginstall paket ini ada beberapa cara, diantaranya :

* menggunakan composer dengan menjalankan perintah berikut :

  `composer require dekiakbar/indonesia-regions-php-client`

  Jika anda menggunakan laravel maka paket ini akan otomatis di load oleh laravel, namun jika anda tidak menggunakan laravel maka anda dapat import paket tersebut secara manual pada file php anda, sebagai contoh :

  ```php
  require_once __DIR__ . '/vendor/autoload.php';
  use Dekiakbar\IndonesiaRegionsPhpClient\Region;
  $region = new Region();
  print_r( $region->getAllProvince('pos') );
  ```


* dengan cara manual yaitu dengan mendownload paket tersebut dari repo github saya [disini](https://github.com/dekiakbar/indonesia-regions-php-client).

  Setelah di download anda bisa import manual class **Region** dari paket tersebut cara nya sama dengan cara jika anda install menggunakan composer, yaitu dengan cara berikut :

  ```php
  require_once __DIR__ . '/vendor/autoload.php';
  use Dekiakbar\IndonesiaRegionsPhpClient\Region;
  $region = new Region();
  print_r( $region->getAllProvince('pos') );
  ```
