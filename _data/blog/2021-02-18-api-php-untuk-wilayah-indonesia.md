---
template: BlogPost
path: /blog/api-php-untuk-wilayah-indonesia
date: 2021-02-18T15:39:41.652Z
title: API PHP untuk wilayah Indonesia
metaDescription: >-
  API PHP untuk mengambil data Provinsi, Kota/Kabupaten, Kecamatan, Kelurahan
  dari website BPS, tersedia dalam bentuk SQL. CSV dan JSON. jika kamu
  menggunakan laravel atau framework yang support dengan composer kamu bisa
  install juga paket composernya.
metaKeyword: >-
  api,php,indonesia,region,bps,sdk,wilayah,composer,package,paket,provinsi,kota,kabupaten,kecamatan,kelurahan,kodepos,
tags: 'API,PHP,Composer,BPS,Laravel,Wilayah Indonesia'
thumbnail: /images/blog/api-php-untuk-wilayah-indonesia.png
---
Pada artikel ini saya akan membahas sebuah paket composer yang bisa kamu gunakan untuk scraping data atau bisa dibilang untuk mendapatkan data wilayah indonesia yang mana sumber data nya berasal dari website [BPS](https://bps.go.id/) .

URL github : <a rel="noreferrer" href="https://github.com/dekiakbar/indonesia-regions-php-client" target="_blank">Klik Disini</a>

URL Packagist :  <a rel="noreferrer" href="https://packagist.org/packages/dekiakbar/indonesia-regions-php-client" target="_blank">Klik Disini</a>

[indonesia-regions-php-client](https://github.com/dekiakbar/indonesia-regions-php-client)Paket ini support dan bisa digunakan dengan Laravel atau framework lain yang support dengan composer. Dengan paket ini kamu bisa mendapatkan data Provinsi, Kota/Kabupaten, Kecamatan, Kelurahan dan kode pos. ada 2 jenis data yang tersedia dalam paket [Indonesia Regions PHP Client](https://github.com/dekiakbar/indonesia-regions-php-client) , yaitu :

* Data Offline, dalam format : SQL, JSON, dan CSV.
* Data Online / Realtime dengan scraping data langsung ke website [BPS](https://bps.go.id/) .

## Installasi Paket

untuk menginstall paket ini ada beberapa cara, diantaranya :

* menggunakan composer dengan menjalankan perintah berikut :

  ```php
  composer require dekiakbar/indonesia-regions-php-client
  ```

  Jika kamu menggunakan laravel maka paket ini akan otomatis di load oleh laravel, namun jika kamu tidak menggunakan laravel maka kamu dapat import paket tersebut secara manual pada file php kamu, sebagai contoh :

  ```php
   require_once __DIR__ . '/vendor/autoload.php';
   use Dekiakbar\IndonesiaRegionsPhpClient\Region;
   $region = new Region();
   print_r( $region->getAllProvince('pos') );
  ```
* dengan cara manual yaitu dengan mendownload paket tersebut dari repo github saya [disini](https://github.com/dekiakbar/indonesia-regions-php-client).

  Setelah di download kamu bisa import manual class **Region** dari paket tersebut cara nya sama dengan cara jika kamu install menggunakan composer, yaitu dengan cara berikut :

  ```php
  require_once __DIR__ . '/vendor/autoload.php';
  use Dekiakbar\IndonesiaRegionsPhpClient\Region;
  $region = new Region();
  print_r( $region->getAllProvince('pos') );
  ```

## Penggunaan

* Daftar kode ISO 3166-2 untuk setiap provinsi :

  **Note : Method ini hanya untuk provinsi saja.**

  ```php
  require_once __DIR__ . '/vendor/autoload.php';
  use Dekiakbar\IndonesiaRegionsPhpClient\Region;
  $region = new Region();

  // Kode Provinsi didapat dari $region->getAllProvince('bps')->list
  $provinceId = 32;
  print_r( 
          $region->getIsoCode($provinceId) 
  );

  // return dari srespon berupa string, yang mana kurang lebih seperti berikut  :
  ID-JB
  ```
* Daftar data provinsi :

  ```php
  require_once __DIR__ . '/vendor/autoload.php';
  use Dekiakbar\IndonesiaRegionsPhpClient\Region;
  $region = new Region();
  print_r( $region->getAllProvince('pos') );

  // berikut contoh respon :
  stdClass Object
  (
      [detail] => Array
          (
              [0] => stdClass Object
                  (
                      [kode_bps] => 11
                      [nama_bps] => ACEH
                      [kode_pos] => 20000
                      [nama_pos] => ACEH
                  )

              [1] => stdClass Object
                  (
                      [kode_bps] => 51
                      [nama_bps] => BALI
                      [kode_pos] => 80000
                      [nama_pos] => BALI
                  )
          )
      [list] => Array
          (
              [0] => stdClass Object
                  (
                      [kode] => 11
                      [nama] => ACEH
                  )

              [1] => stdClass Object
                  (
                      [kode] => 12
                      [nama] => SUMATERA UTARA
                  )
          )
  )
  ```
* Daftar data kota/kabupaten bedasarkan Id provinsi :

  ```php
  require_once __DIR__ . '/vendor/autoload.php';
  use Dekiakbar\IndonesiaRegionsPhpClient\Region;
  $region = new Region();

  // provinsi Id di dapatkan dari $region->getAllProvince('bps')
  $provinceId = 32;
  print_r( 
      $region->getCityListByProvinceId('pos',$provinceId) 
  );

  // berikut contoh respon :
  stdClass Object
  (
      [detail] => Array
          (
              [0] => stdClass Object
                  (
                      [kode_bps] => 3204
                      [nama_bps] => BANDUNG
                      [kode_pos] => 40300
                      [nama_pos] => BANDUNG
                  )

              [1] => stdClass Object
                  (
                      [kode_bps] => 3273
                      [nama_bps] => BANDUNG
                      [kode_pos] => 40100
                      [nama_pos] => KOTA BANDUNG
                  )
          )
      [list] => Array
          (
              [0] => stdClass Object
                  (
                      [kode] => 3201
                      [nama] => BOGOR
                  )

              [1] => stdClass Object
                  (
                      [kode] => 3202
                      [nama] => SUKABUMI
                  )
          )
  )
  ```
* Daftar Kecamatan berdasarkan Id Kota :

  ```php
  require_once __DIR__ . '/vendor/autoload.php';
  use Dekiakbar\IndonesiaRegionsPhpClient\Region;
  $region = new Region();

  // POS
  // Id kota didapatkan dari $region->getCityListByProvinceId('pos',$provinceId)->list
  $cityId = 3273;
  print_r( 
      $region->getSubdistrictListByCityId('pos',$cityId)
  );

  // respon yang didapat kurang lebih seperti berikut :
  stdClass Object
  (
      [detail] => Array
          (
              [0] => stdClass Object
                  (
                      [kode_bps] => 3273180
                      [nama_bps] => ANDIR
                      [kode_pos] => 40181
                      [nama_pos] => Andir
                  )

              [1] => stdClass Object
                  (
                      [kode_bps] => 3273180
                      [nama_bps] => ANDIR
                      [kode_pos] => 40182
                      [nama_pos] => Andir
                  )
          )
      [list] => Array
          (
              [0] => stdClass Object
                  (
                      [kode] => 3273010
                      [nama] => BANDUNG KULON
                  )

              [1] => stdClass Object
                  (
                      [kode] => 3273020
                      [nama] => BABAKAN CIPARAY
                  )
          )
  )



  // Dagri
  // Id Kota/Kabupaten didapat dari $region->getCityListByProvinceId('dagri',$provinceId)->list
  $cityId = '32.73';
  print_r(
      $region->getSubdistrictListByCityId('dagri',$cityId)
  );

  // respon yang didapata kurang lebih seperti berikut :
  stdClass Object
  (
      [detail] => Array
          (
              [0] => stdClass Object
                  (
                      [kode_bps] => 3273050
                      [nama_bps] => ASTANAANYAR
                      [kode_dagri] => 32.73.10
                      [nama_dagri] => ASTANA ANYAR
                  )

              [1] => stdClass Object
                  (
                      [kode_bps] => 3273120
                      [nama_bps] => UJUNG BERUNG
                      [kode_dagri] => 32.73.26
                      [nama_dagri] => UJUNGBERUNG
                  )
          )
      [list] => Array
          (
              [0] => stdClass Object
                  (
                      [kode] => 32.73.01
                      [nama] => Sukasari
                  )

              [1] => stdClass Object
                  (
                      [kode] => 32.73.02
                      [nama] => Coblong
                  )
          )
  )
  ```
* Daftar Desa/Kelurahan berdasarkan Id kecamatan :

  ```php
  require_once __DIR__ . '/vendor/autoload.php';
  use Dekiakbar\IndonesiaRegionsPhpClient\Region;
  $region = new Region();
  // POS
  // Id Kecamatan didapatkan dari $region->getSubdistrictListByCityId('pos',$cityId)->list
  $subdistrictId = 3273010;
  print_r( 
      $region->getVillageListBySubdistrictId('pos',$subdistrictId)
  );

  // respon yang didapat kurang lebih seperti berikut :
  stdClass Object
  (
      [detail] => Array
          (
              [0] => stdClass Object
                  (
                      [kode_bps] => 3273010005
                      [nama_bps] => CARINGIN
                      [kode_pos] => 40212
                      [nama_pos] => Caringin
                  )

              [1] => stdClass Object
                  (
                      [kode_bps] => 3273010007
                      [nama_bps] => CIBUNTU
                      [kode_pos] => 40212
                      [nama_pos] => Cibuntu
                  )
          )
      [list] => Array
          (
              [0] => stdClass Object
                  (
                      [kode] => 3273010001
                      [nama] => GEMPOL SARI
                  )

              [1] => stdClass Object
                  (
                      [kode] => 3273010002
                      [nama] => CIGONDEWAH KALER
                  )
          )
  )

  // Dagri
  // Id Kecamatan di dapat dari $region->getSubdistrictListByCityId('dagri',$cityId)->list
  $subdistrictId = '32.73.10';
  print_r( 
      $region->getVillageListBySubdistrictId('dagri',$subdistrictId) 
  );

  // respon yang didapat kurang lebih seperti berikut :
  stdClass Object
  (
      [detail] => Array
          (
              [0] => stdClass Object
                  (
                      [kode_bps] => 3273050001
                      [nama_bps] => KARASAK
                      [kode_dagri] => 32.73.10.1001
                      [nama_dagri] => KARASAK
                  )

              [1] => stdClass Object
                  (
                      [kode_bps] => 3273050002
                      [nama_bps] => PELINDUNG HEWAN
                      [kode_dagri] => 32.73.10.1006
                      [nama_dagri] => PELINDUNG HEWAN
                  )
          )
  )
  ```
