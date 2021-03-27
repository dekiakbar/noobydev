---
template: BlogPost
path: /blog/linode-shared-vps-bechmark
date: 2021-03-27T08:03:02.915Z
title: Benchmark shared VPS linode
metaDescription: >-
  Benchmark / review shared VPS linode 1GB, 2GB, 8GB dan 16 GB. Datacenter
  singapore, dalam test ini menggunakan beberapa tool yaitu bench, geekbench4,
  hdparm dan nench , menggunakan OS ubuntu 20.04 LTS. 
metaKeyword: >-
  linode,vps,benchmark vps,shared vps,sg vps, singapore vps,1GB VPS,2GB VPS,8GB
  VPS,16GB VPS,geekbench,hdparm,bench,nench,bechmark
tags: 'Linode,VPS,1GB,2GB,8GB,16GB,Ubuntu'
thumbnail: /images/blog/benchmark-shared-vps-linode.png
---
Benchmark / review shared VPS linode 1GB, 2GB, 8GB dan 16 GB. Datacenter singapore, dalam test ini menggunakan beberapa tool yaitu bench, geekbench4, hdparm dan nench , menggunakan OS ubuntu 20.04 LTS.

Dapatkan free credit sebesar $100 untuk 90 hari di <a rel=”noreferrer” href="https://www.linode.com/?r=2ef97a0e7d1fffb43d481f49dc2494883cd02a05" target="_blank">Linode</a>

#### Fitur Dasar dari masing-masing VPS :

| RAM   | CPU     | Storage   | Transfer | Network In | Network Out | Price     |
| ----- | ------- | --------- | -------- | ---------- | ----------- | --------- |
| 1 GB  | 1 Core  | 25GB SSD  | 1 TB     | 40Gbps     | 1000 Mbps   | $5/bulan  |
| 2 GB  | 1 Core  | 50GB SSD  | 2 TB     | 40Gbps     | 2000 Mbps   | $10/bulan |
| 8 GB  | 4 Cores | 160GB SSD | 5 TB     | 40Gbps     | 5000 Mbps   | $40/bulan |
| 16 GB | 6 Cores | 320GB SSD | 8 TB     | 40Gbps     | 6000 Mbps   | $80/bulan |

#### Hasil benchmark dari masing-masing VPS shared Linode :

##### Geekbench

| Geekbench 4                | Linode 1Gb                                                                                          | Linode 2GB                                                                                          | Linode 8GB                                                                                          | Linode 16GB                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Single-Core Score          | 2121                                                                                                | 2213                                                                                                | 2265                                                                                                | 2305                                                                                                |
| Single-Core Crypto         | 2957                                                                                                | 3121                                                                                                | 3173                                                                                                | 3348                                                                                                |
| Single-Core Integer        | 2249                                                                                                | 2402                                                                                                | 2332                                                                                                | 2523                                                                                                |
| Single-Core Floating Point | 1996                                                                                                | 2111                                                                                                | 2009                                                                                                | 2214                                                                                                |
| Single-Core Memory         | 1811                                                                                                | 1713                                                                                                | 2271                                                                                                | 1688                                                                                                |
| Multi-Core Score           | 2045                                                                                                | 2158                                                                                                | 6576                                                                                                | 9918                                                                                                |
| Multi-Core Crypto          | 3122                                                                                                | 3334                                                                                                | 7655                                                                                                | 8318                                                                                                |
| Multi-Core Integer         | 2286                                                                                                | 2420                                                                                                | 8035                                                                                                | 12748                                                                                               |
| Multi-Core Floating Point  | 1937                                                                                                | 2111                                                                                                | 6511                                                                                                | 10263                                                                                               |
| Multi-Core Memory          | 1393                                                                                                | 1343                                                                                                | 3121                                                                                                | 3434                                                                                                |
| Tes Link                   | <a rel=”noreferrer” href="https://browser.geekbench.com/v4/cpu/16072530" target="_blank">Detail</a> | <a rel=”noreferrer” href="https://browser.geekbench.com/v4/cpu/16072629" target="_blank">Detail</a> | <a rel=”noreferrer” href="https://browser.geekbench.com/v4/cpu/16075905" target="_blank">Detail</a> | <a rel=”noreferrer” href="https://browser.geekbench.com/v4/cpu/16075906" target="_blank">Detail</a> |

##### Bench

| Bench                   | Linode 1Gb                 | Linode 2GB                  | Linode 8GB                  | Linode 16GB                |
| ----------------------- | -------------------------- | --------------------------- | --------------------------- | -------------------------- |
| Average I/O speed       | 729.3 MB/s                 | 639.3 MB/s                  | 754.7 MB/s                  | 762.3 MB/s                 |
| Speedtest               | 995.48 Mbps / 5848.66 Mbps | 1994.78 Mbps / 7070.14 Mbps | 2213.15 Mbps / 6083.93 Mbps | 671.52 Mbps / 772.06 Mbps  |
| Beijing    CU (Up/Down) | 1.79 Mbps / 2228.55 Mbps   | 2.08 Mbps / 2329.49 Mbps    | 2.33 Mbps / 1756.01 Mbps    | 1.47 Mbps / 1228.67 Mbps   |
| Shanghai   CT (Up/Down) | 1.16 Mbps / 2777.32 Mbps   | 0.70 Mbps / 1546.42 Mbps    | 58.12 Mbps / 4617.80 Mbps   | 28.95 Mbps / 1325.76 Mbps  |
| Shanghai   CU (Up/Down) | 390.83 Mbps / 2095.21 Mbps | 30.95 Mbps / 1813.90 Mbps   | 0.27 Mbps / 36.76 Mbps      | 0.49 Mbps / 174.21 Mbps    |
| Guangzhou  CU (Up/Down) | 1.49 Mbps / 2779.77 Mbps   | 2.12 Mbps / 2987.43 Mbps    | 1.44 Mbps / 4071.11 Mbps    | 1.54 Mbps / 1279.78 Mbps   |
| Shenzhen   CU (Up/Down) | 2.08 Mbps / 2027.93 Mbps   | 1.50 Mbps / 2119.49 Mbps    | 1.32 Mbps / 1738.28 Mbps    | 1.01 Mbps / 1121.61 Mbps   |
| Hongkong   CN (Up/Down) | 761.27 Mbps / 2765.86 Mbps | 2192.92 Mbps / 3566.57 Mbps | 950.00 Mbps / 3038.57 Mbps  | 670.43 Mbps / 1784.33 Mbps |
| Singapore  SG (Up/Down) | 996.02 Mbps / 5605.23 Mbps | 1996.17 Mbps / 7129.54 Mbps | 5607.22 Mbps / 5664.91 Mbps | 416.24 Mbps / 1665.76 Mbps |
| Tokyo      JP (Up/Down) | 110.21 Mbps / 15.49 Mbps   | 286.91 Mbps / 9.25 Mbps     | 271.62 Mbps / 24.25 Mbps    | 445.23 Mbps / 101.88 Mbps  |

##### Hdparm

| Hdparm                     | Linode 1Gb     | Linode 2GB     | Linode 8GB     | Linode 16GB    |
| -------------------------- | -------------- | -------------- | -------------- | -------------- |
| Timing cached reads        | 3254.95 MB/sec | 3112.23 MB/sec | 3300.89 MB/sec | 2996.88 MB/sec |
| Timing buffered disk reads | 817.30 MB/sec  | 821.12 MB/sec  | 749.64 MB/sec  | 873.73 MB/sec  |

##### Nench

| Nench                    | Linode 1Gb   | Linode 2GB   | Linode 8GB   | Linode 16GB  |
| ------------------------ | ------------ | ------------ | ------------ | ------------ |
| SHA256-hashing 500 MB    | 4.228 s      | 3.717 s      | 4.338 s      | 3.179 s      |
| bzip2-compressing 500 MB | 8.241 s      | 7.647 s      | 8.175 s      | 7.585 s      |
| AES-encrypting 500 MB    | 1.650 s      | 1.517 s      | 1.630 s      | 1.531 s      |
| SSD read speed           | 1.00 GiB/s   | 1.15 GiB/s   | 945.7 MiB/s  | 1.29 GiB/s   |
| SSD write speed          | 669.16 MiB/s | 757.54 MiB/s | 658.35 MiB/s | 700.31 MiB/s |
| Cachefly CDN             | 423.73 MiB/s | 381.68 MiB/s | 361.01 MiB/s | 98.52 MiB/s  |
| Leaseweb (NL)            | 13.38 MiB/s  | 13.19 MiB/s  | 13.04 MiB/s  | 6.28 MiB/s   |
| Softlayer DAL (US)       | 5.04 MiB/s   | 6.82 MiB/s   | 7.64 MiB/s   | 7.96 MiB/s   |
| Online (FR)              | 5.96 MiB/s   | 6.18 MiB/s   | 5.41 MiB/s   | 7.04 MiB/s   |
| OVH BHS (CA)             | 8.72 MiB/s   | 8.80 MiB/s   | 8.79 MiB/s   | 6.43 MiB/s   |



Dari hasil benchmark di atas bisa disimpulkan bahwa linode cukup baik untuk hosting aplikasi kamu dengan harga yang kompetitif dan dengan performa yang cukup bagus. Oh iya Linode juga menyediakan free credit bagi memeber baru dengan nominal $!00 dengan masa aktif 90 hari. kamu bisa register di <a rel=”noreferrer” href="https://www.linode.com/?r=2ef97a0e7d1fffb43d481f49dc2494883cd02a05" target="_blank">Linode</a>
