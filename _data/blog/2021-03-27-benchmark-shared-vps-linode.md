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
<p>Benchmark / review shared VPS linode 1GB, 2GB, 8GB dan 16 GB. Datacenter singapore, dalam test ini menggunakan beberapa tool yaitu bench, geekbench4, hdparm dan nench , menggunakan OS ubuntu 20.04 LTS.</p>
<p>Dapatkan free credit sebesar $100 untuk 90 hari di <a rel=”noreferrer” href="https://www.linode.com/?r=2ef97a0e7d1fffb43d481f49dc2494883cd02a05" target="_blank">Linode</a></p>
<h4 id="fitur-dasar-dari-masing-masing-vps-">Fitur Dasar dari masing-masing VPS :</h4>
<table>
   <thead>
      <tr>
         <th>RAM</th>
         <th>CPU</th>
         <th>Storage</th>
         <th>Transfer</th>
         <th>Network In</th>
         <th>Network Out</th>
         <th>Price</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td data-label="RAM">1 GB</td>
         <td data-label="CPU">1 Core</td>
         <td data-label="Storage">25GB SSD</td>
         <td data-label="Transfer">1 TB</td>
         <td data-label="Network In">40Gbps</td>
         <td data-label="Network Out">1000 Mbps</td>
         <td data-label="Price">$5/bulan</td>
      </tr>
      <tr>
         <td data-label="RAM">2 GB</td>
         <td data-label="CPU">1 Core</td>
         <td data-label="Storage">50GB SSD</td>
         <td data-label="Transfer">2 TB</td>
         <td data-label="Network In">40Gbps</td>
         <td data-label="Network Out">2000 Mbps</td>
         <td data-label="Price">$10/bulan</td>
      </tr>
      <tr>
         <td data-label="RAM">8 GB</td>
         <td data-label="CPU">4 Cores</td>
         <td data-label="Storage">160GB SSD</td>
         <td data-label="Transfer">5 TB</td>
         <td data-label="Network In">40Gbps</td>
         <td data-label="Network Out">5000 Mbps</td>
         <td data-label="Price">$40/bulan</td>
      </tr>
      <tr>
         <td data-label="RAM">16 GB</td>
         <td data-label="CPU">6 Cores</td>
         <td data-label="Storage">320GB SSD</td>
         <td data-label="Transfer">8 TB</td>
         <td data-label="Network In">40Gbps</td>
         <td data-label="Network Out">6000 Mbps</td>
         <td data-label="Price">$80/bulan</td>
      </tr>
   </tbody>
</table>
<br/>
<h4 id="hasil-benchmark-geekbench-dari-masing-masing-vps-shared-linode-">Hasil benchmark Geekbench dari masing-masing VPS shared Linode :</h4>
<table>
   <thead>
      <tr>
         <th>Geekbench 4</th>
         <th>Linode 1Gb</th>
         <th>Linode 2GB</th>
         <th>Linode 8GB</th>
         <th>Linode 16GB</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td data-label="Geekbench 4">Single-Core Score</td>
         <td data-label="Linode 1Gb">2121</td>
         <td data-label="Linode 2GB">2213</td>
         <td data-label="Linode 8GB">2265</td>
         <td data-label="Linode 16GB">2305</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Single-Core Crypto</td>
         <td data-label="Linode 1Gb">2957</td>
         <td data-label="Linode 2GB">3121</td>
         <td data-label="Linode 8GB">3173</td>
         <td data-label="Linode 16GB">3348</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Single-Core Integer</td>
         <td data-label="Linode 1Gb">2249</td>
         <td data-label="Linode 2GB">2402</td>
         <td data-label="Linode 8GB">2332</td>
         <td data-label="Linode 16GB">2523</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Single-Core Floating Point</td>
         <td data-label="Linode 1Gb">1996</td>
         <td data-label="Linode 2GB">2111</td>
         <td data-label="Linode 8GB">2009</td>
         <td data-label="Linode 16GB">2214</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Single-Core Memory</td>
         <td data-label="Linode 1Gb">1811</td>
         <td data-label="Linode 2GB">1713</td>
         <td data-label="Linode 8GB">2271</td>
         <td data-label="Linode 16GB">1688</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Multi-Core Score</td>
         <td data-label="Linode 1Gb">2045</td>
         <td data-label="Linode 2GB">2158</td>
         <td data-label="Linode 8GB">6576</td>
         <td data-label="Linode 16GB">9918</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Multi-Core Crypto</td>
         <td data-label="Linode 1Gb">3122</td>
         <td data-label="Linode 2GB">3334</td>
         <td data-label="Linode 8GB">7655</td>
         <td data-label="Linode 16GB">8318</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Multi-Core Integer</td>
         <td data-label="Linode 1Gb">2286</td>
         <td data-label="Linode 2GB">2420</td>
         <td data-label="Linode 8GB">8035</td>
         <td data-label="Linode 16GB">12748</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Multi-Core Floating Point</td>
         <td data-label="Linode 1Gb">1937</td>
         <td data-label="Linode 2GB">2111</td>
         <td data-label="Linode 8GB">6511</td>
         <td data-label="Linode 16GB">10263</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Multi-Core Memory</td>
         <td data-label="Linode 1Gb">1393</td>
         <td data-label="Linode 2GB">1343</td>
         <td data-label="Linode 8GB">3121</td>
         <td data-label="Linode 16GB">3434</td>
      </tr>
      <tr>
         <td data-label="Geekbench 4">Tes Link</td>
         <td data-label="Linode 1Gb"><a rel=”noreferrer” href="https://browser.geekbench.com/v4/cpu/16072530" target="_blank">Detail</a></td>
         <td data-label="Linode 2GB"><a rel=”noreferrer” href="https://browser.geekbench.com/v4/cpu/16072629" target="_blank">Detail</a></td>
         <td data-label="Linode 8GB"><a rel=”noreferrer” href="https://browser.geekbench.com/v4/cpu/16075905" target="_blank">Detail</a></td>
         <td data-label="Linode 16GB"><a rel=”noreferrer” href="https://browser.geekbench.com/v4/cpu/16075906" target="_blank">Detail</a></td>
      </tr>
   </tbody>
</table>
<br/>
<h4 id="hasil-benchmark-bench-dari-masing-masing-vps-shared-linode-">Hasil benchmark Bench dari masing-masing VPS shared Linode :</h4>
<table>
   <thead>
      <tr>
         <th>Bench</th>
         <th>Linode 1Gb</th>
         <th>Linode 2GB</th>
         <th>Linode 8GB</th>
         <th>Linode 16GB</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td data-label="Bench">Average I/O speed</td>
         <td data-label="Linode 1Gb">729.3 MB/s</td>
         <td data-label="Linode 2GB">639.3 MB/s</td>
         <td data-label="Linode 8GB">754.7 MB/s</td>
         <td data-label="Linode 16GB">762.3 MB/s</td>
      </tr>
      <tr>
         <td data-label="Bench">Speedtest</td>
         <td data-label="Linode 1Gb">995.48 Mbps / 5848.66 Mbps</td>
         <td data-label="Linode 2GB">1994.78 Mbps / 7070.14 Mbps</td>
         <td data-label="Linode 8GB">2213.15 Mbps / 6083.93 Mbps</td>
         <td data-label="Linode 16GB">671.52 Mbps / 772.06 Mbps</td>
      </tr>
      <tr>
         <td data-label="Bench">Beijing    CU (Up/Down)</td>
         <td data-label="Linode 1Gb">1.79 Mbps / 2228.55 Mbps</td>
         <td data-label="Linode 2GB">2.08 Mbps / 2329.49 Mbps</td>
         <td data-label="Linode 8GB">2.33 Mbps / 1756.01 Mbps</td>
         <td data-label="Linode 16GB">1.47 Mbps / 1228.67 Mbps</td>
      </tr>
      <tr>
         <td data-label="Bench">Shanghai   CT (Up/Down)</td>
         <td data-label="Linode 1Gb">1.16 Mbps / 2777.32 Mbps</td>
         <td data-label="Linode 2GB">0.70 Mbps / 1546.42 Mbps</td>
         <td data-label="Linode 8GB">58.12 Mbps / 4617.80 Mbps</td>
         <td data-label="Linode 16GB">28.95 Mbps / 1325.76 Mbps</td>
      </tr>
      <tr>
         <td data-label="Bench">Shanghai   CU (Up/Down)</td>
         <td data-label="Linode 1Gb">390.83 Mbps / 2095.21 Mbps</td>
         <td data-label="Linode 2GB">30.95 Mbps / 1813.90 Mbps</td>
         <td data-label="Linode 8GB">0.27 Mbps / 36.76 Mbps</td>
         <td data-label="Linode 16GB">0.49 Mbps / 174.21 Mbps</td>
      </tr>
      <tr>
         <td data-label="Bench">Guangzhou  CU (Up/Down)</td>
         <td data-label="Linode 1Gb">1.49 Mbps / 2779.77 Mbps</td>
         <td data-label="Linode 2GB">2.12 Mbps / 2987.43 Mbps</td>
         <td data-label="Linode 8GB">1.44 Mbps / 4071.11 Mbps</td>
         <td data-label="Linode 16GB">1.54 Mbps / 1279.78 Mbps</td>
      </tr>
      <tr>
         <td data-label="Bench">Shenzhen   CU (Up/Down)</td>
         <td data-label="Linode 1Gb">2.08 Mbps / 2027.93 Mbps</td>
         <td data-label="Linode 2GB">1.50 Mbps / 2119.49 Mbps</td>
         <td data-label="Linode 8GB">1.32 Mbps / 1738.28 Mbps</td>
         <td data-label="Linode 16GB">1.01 Mbps / 1121.61 Mbps</td>
      </tr>
      <tr>
         <td data-label="Bench">Hongkong   CN (Up/Down)</td>
         <td data-label="Linode 1Gb">761.27 Mbps / 2765.86 Mbps</td>
         <td data-label="Linode 2GB">2192.92 Mbps / 3566.57 Mbps</td>
         <td data-label="Linode 8GB">950.00 Mbps / 3038.57 Mbps</td>
         <td data-label="Linode 16GB">670.43 Mbps / 1784.33 Mbps</td>
      </tr>
      <tr>
         <td data-label="Bench">Singapore  SG (Up/Down)</td>
         <td data-label="Linode 1Gb">996.02 Mbps / 5605.23 Mbps</td>
         <td data-label="Linode 2GB">1996.17 Mbps / 7129.54 Mbps</td>
         <td data-label="Linode 8GB">5607.22 Mbps / 5664.91 Mbps</td>
         <td data-label="Linode 16GB">416.24 Mbps / 1665.76 Mbps</td>
      </tr>
      <tr>
         <td data-label="Bench">Tokyo      JP (Up/Down)</td>
         <td data-label="Linode 1Gb">110.21 Mbps / 15.49 Mbps</td>
         <td data-label="Linode 2GB">286.91 Mbps / 9.25 Mbps</td>
         <td data-label="Linode 8GB">271.62 Mbps / 24.25 Mbps</td>
         <td data-label="Linode 16GB">445.23 Mbps / 101.88 Mbps</td>
      </tr>
   </tbody>
</table>
<br/>
<h4 id="hasil-benchmark-hdparm-dari-masing-masing-vps-shared-linode-">Hasil benchmark Hdparm dari masing-masing VPS shared Linode :</h4>
<table>
   <thead>
      <tr>
         <th>Hdparm</th>
         <th>Linode 1Gb</th>
         <th>Linode 2GB</th>
         <th>Linode 8GB</th>
         <th>Linode 16GB</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td data-label="Hdparm">Timing cached reads</td>
         <td data-label="Linode 1Gb">3254.95 MB/sec</td>
         <td data-label="Linode 2GB">3112.23 MB/sec</td>
         <td data-label="Linode 8GB">3300.89 MB/sec</td>
         <td data-label="Linode 16GB">2996.88 MB/sec</td>
      </tr>
      <tr>
         <td data-label="Hdparm">Timing buffered disk reads</td>
         <td data-label="Linode 1Gb">817.30 MB/sec</td>
         <td data-label="Linode 2GB">821.12 MB/sec</td>
         <td data-label="Linode 8GB">749.64 MB/sec</td>
         <td data-label="Linode 16GB">873.73 MB/sec</td>
      </tr>
   </tbody>
</table>
<br/>
<h4 id="hasil-benchmark-nench-dari-masing-masing-vps-shared-linode-">Hasil benchmark Nench dari masing-masing VPS shared Linode :</h4>
<table>
   <thead>
      <tr>
         <th>Nench</th>
         <th>Linode 1Gb</th>
         <th>Linode 2GB</th>
         <th>Linode 8GB</th>
         <th>Linode 16GB</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td data-label="Nench">SHA256-hashing 500 MB</td>
         <td data-label="Linode 1Gb">4.228 s</td>
         <td data-label="Linode 2GB">3.717 s</td>
         <td data-label="Linode 8GB">4.338 s</td>
         <td data-label="Linode 16GB">3.179 s</td>
      </tr>
      <tr>
         <td data-label="Nench">bzip2-compressing 500 MB</td>
         <td data-label="Linode 1Gb">8.241 s</td>
         <td data-label="Linode 2GB">7.647 s</td>
         <td data-label="Linode 8GB">8.175 s</td>
         <td data-label="Linode 16GB">7.585 s</td>
      </tr>
      <tr>
         <td data-label="Nench">AES-encrypting 500 MB</td>
         <td data-label="Linode 1Gb">1.650 s</td>
         <td data-label="Linode 2GB">1.517 s</td>
         <td data-label="Linode 8GB">1.630 s</td>
         <td data-label="Linode 16GB">1.531 s</td>
      </tr>
      <tr>
         <td data-label="Nench">SSD read speed</td>
         <td data-label="Linode 1Gb">1.00 GiB/s</td>
         <td data-label="Linode 2GB">1.15 GiB/s</td>
         <td data-label="Linode 8GB">945.7 MiB/s</td>
         <td data-label="Linode 16GB">1.29 GiB/s</td>
      </tr>
      <tr>
         <td data-label="Nench">SSD write speed</td>
         <td data-label="Linode 1Gb">669.16 MiB/s</td>
         <td data-label="Linode 2GB">757.54 MiB/s</td>
         <td data-label="Linode 8GB">658.35 MiB/s</td>
         <td data-label="Linode 16GB">700.31 MiB/s</td>
      </tr>
      <tr>
         <td data-label="Nench">Cachefly CDN</td>
         <td data-label="Linode 1Gb">423.73 MiB/s</td>
         <td data-label="Linode 2GB">381.68 MiB/s</td>
         <td data-label="Linode 8GB">361.01 MiB/s</td>
         <td data-label="Linode 16GB">98.52 MiB/s</td>
      </tr>
      <tr>
         <td data-label="Nench">Leaseweb (NL)</td>
         <td data-label="Linode 1Gb">13.38 MiB/s</td>
         <td data-label="Linode 2GB">13.19 MiB/s</td>
         <td data-label="Linode 8GB">13.04 MiB/s</td>
         <td data-label="Linode 16GB">6.28 MiB/s</td>
      </tr>
      <tr>
         <td data-label="Nench">Softlayer DAL (US)</td>
         <td data-label="Linode 1Gb">5.04 MiB/s</td>
         <td data-label="Linode 2GB">6.82 MiB/s</td>
         <td data-label="Linode 8GB">7.64 MiB/s</td>
         <td data-label="Linode 16GB">7.96 MiB/s</td>
      </tr>
      <tr>
         <td data-label="Nench">Online (FR)</td>
         <td data-label="Linode 1Gb">5.96 MiB/s</td>
         <td data-label="Linode 2GB">6.18 MiB/s</td>
         <td data-label="Linode 8GB">5.41 MiB/s</td>
         <td data-label="Linode 16GB">7.04 MiB/s</td>
      </tr>
      <tr>
         <td data-label="Nench">OVH BHS (CA)</td>
         <td data-label="Linode 1Gb">8.72 MiB/s</td>
         <td data-label="Linode 2GB">8.80 MiB/s</td>
         <td data-label="Linode 8GB">8.79 MiB/s</td>
         <td data-label="Linode 16GB">6.43 MiB/s</td>
      </tr>
   </tbody>
</table>
<br/>
<p>Dari hasil benchmark di atas bisa disimpulkan bahwa linode cukup baik untuk hosting aplikasi kamu dengan harga yang kompetitif dan dengan performa yang cukup bagus. Oh iya Linode juga menyediakan free credit bagi memeber baru dengan nominal $!00 dengan masa aktif 90 hari. kamu bisa register di <a rel=”noreferrer” href="https://www.linode.com/?r=2ef97a0e7d1fffb43d481f49dc2494883cd02a05" target="_blank">Linode</a></p>