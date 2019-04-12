### Лабораторная работа №2

#### Знакомство с nginx

Зафиксируем в ApachBenchmark количество запросов 10, количество конкурентных запросов 100.

ab -c 10 -n 100 http://localhost:3000/getlist/

1. Скорость отдачи контента на сервере из лабораторной работы №1 (отдача страниц, картинки, запросов к api). 

   **api GET:**

   ```
   Server Software:
   Server Hostname:        localhost
   Server Port:            3000
   
   Document Path:          /
   Document Length:        2 bytes
   
   Concurrency Level:      10
   Time taken for tests:   0.179 seconds
   Complete requests:      100
   Failed requests:        0
   Total transferred:      20700 bytes
   HTML transferred:       200 bytes
   Requests per second:    559.91 [#/sec] (mean)
   Time per request:       17.860 [ms] (mean)
   Time per request:       1.786 [ms] (mean, across all concurrent requests)
   Transfer rate:          113.19 [Kbytes/sec] received
   
   Connection Times (ms)
                 min  mean[+/-sd] median   max
   Connect:        0    0   1.2      0      11
   Processing:     5   16   3.5     15      24
   Waiting:        5   15   3.5     15      24
   Total:          8   16   3.1     16      24
   
   Percentage of the requests served within a certain time (ms)
     50%     16
     66%     17
     75%     18
     80%     19
     90%     21
     95%     22
     98%     23
     99%     24
    100%     24 (longest request)
   ```

   Логирование:

   ```
   {"time":"2019-04-11T19:44:14.163Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T19:44:14.163Z","lvl":"INFO","msg":"Response with status 200 in 0 ms."}
   {"time":"2019-04-11T19:44:14.164Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T19:44:14.164Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T19:44:14.164Z","lvl":"INFO","msg":"Response with status 200 in 0 ms."}
   {"time":"2019-04-11T19:44:14.169Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T19:44:14.169Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T19:44:14.170Z","lvl":"INFO","msg":"Response with status 200 in 1 ms."}
   {"time":"2019-04-11T19:44:14.170Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T19:44:14.172Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T19:44:14.172Z","lvl":"INFO","msg":"Response with status 200 in 0 ms."}
   {"time":"2019-04-11T19:44:14.172Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T19:44:14.173Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T19:44:14.173Z","lvl":"INFO","msg":"Response with status 200 in 0 ms."}
   {"time":"2019-04-11T19:44:14.174Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T19:44:14.174Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T19:44:14.174Z","lvl":"INFO","msg":"Response with status 200 in 0 ms."}
   {"time":"2019-04-11T19:44:14.174Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T19:44:14.175Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T19:44:14.175Z","lvl":"INFO","msg":"Response with status 200 in 0 ms."}
   {"time":"2019-04-11T19:44:14.175Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T19:44:14.176Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T19:44:14.176Z","lvl":"INFO","msg":"Response with status 200 in 0 ms."}
   {"time":"2019-04-11T19:44:14.176Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T19:44:14.177Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T19:44:14.181Z","lvl":"INFO","msg":"Response with status 200 in 4 ms."}
   {"time":"2019-04-11T19:44:14.182Z","lvl":"INFO","msg":"GET request"}
   ```

   **Отдача страницы с картинкой:**

   ```
   Server Software:
   Server Hostname:        localhost
   Server Port:            3000
   
   Document Path:          /
   Document Length:        105 bytes
   
   Concurrency Level:      10
   Time taken for tests:   0.694 seconds
   Complete requests:      100
   Failed requests:        0
   Total transferred:      39200 bytes
   HTML transferred:       10500 bytes
   Requests per second:    144.00 [#/sec] (mean)
   Time per request:       69.442 [ms] (mean)
   Time per request:       6.944 [ms] (mean, across all concurrent requests)
   Transfer rate:          55.13 [Kbytes/sec] received
   
   Connection Times (ms)
                 min  mean[+/-sd] median   max
   Connect:        0    1   1.0      0       5
   Processing:    38   64  17.2     66     110
   Waiting:       37   64  17.2     66     110
   Total:         38   65  17.1     67     111
   WARNING: The median and mean for the initial connection time are not within a normal deviation
           These results are probably not that reliable.
   
   Percentage of the requests served within a certain time (ms)
     50%     67
     66%     72
     75%     75
     80%     76
     90%     90
     95%     95
     98%    103
     99%    111
    100%    111 (longest request)
   ```

   Логи:

   ```
   {"time":"2019-04-11T21:10:20.946Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T21:10:20.946Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T21:10:20.947Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T21:10:20.948Z","lvl":"INFO","msg":"Response with status 200 in 43 ms."}
   {"time":"2019-04-11T21:10:20.952Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T21:10:20.953Z","lvl":"INFO","msg":"Request from ::ffff:127.0.0.1: GET /"}
   {"time":"2019-04-11T21:10:20.953Z","lvl":"INFO","msg":"Response with status 200 in 25 ms."}
   {"time":"2019-04-11T21:10:20.955Z","lvl":"INFO","msg":"Response with status 200 in 27 ms."}
   {"time":"2019-04-11T21:10:20.959Z","lvl":"INFO","msg":"Response with status 200 in 32 ms."}
   {"time":"2019-04-11T21:10:20.960Z","lvl":"INFO","msg":"Response with status 200 in 31 ms."}
   {"time":"2019-04-11T21:10:20.961Z","lvl":"INFO","msg":"Response with status 200 in 29 ms."}
   {"time":"2019-04-11T21:10:20.962Z","lvl":"INFO","msg":"Response with status 200 in 29 ms."}
   {"time":"2019-04-11T21:10:20.964Z","lvl":"INFO","msg":"Response with status 200 in 30 ms."}
   {"time":"2019-04-11T21:10:20.965Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T21:10:20.970Z","lvl":"INFO","msg":"GET request"}
   {"time":"2019-04-11T21:10:20.971Z","lvl":"INFO","msg":"Response with status 200 in 36 ms."}
   {"time":"2019-04-11T21:10:21.012Z","lvl":"INFO","msg":"Response with status 200 in 60 ms."}
   {"time":"2019-04-11T21:10:21.014Z","lvl":"INFO","msg":"Response with status 200 in 61 ms."}
   ```


2. Конфигурация, чтобы запросы проходили через nginx сервер и перенаправлялись на сервер из лабораторной работы №1.

   ```
   server {
       location / {
           proxy_pass http://localhost:3000;
       }
   }
   ```

3. Конфигурация, nginx отдает статический контент.

   ```
   server {
           location / {
                   root /data/static/html;
           }
           location /img {
                   root /data/static;
           }
   }
   ```

   Время:

   ```
   Server Software:        nginx/1.14.2
   Server Hostname:        localhost
   Server Port:            80
   
   Document Path:          /
   Document Length:        105 bytes
   
   Concurrency Level:      10
   Time taken for tests:   0.102 seconds
   Complete requests:      100
   Failed requests:        0
   Total transferred:      33700 bytes
   HTML transferred:       10500 bytes
   Requests per second:    982.32 [#/sec] (mean)
   Time per request:       10.180 [ms] (mean)
   Time per request:       1.018 [ms] (mean, across all concurrent requests)
   Transfer rate:          323.28 [Kbytes/sec] received
   
   Connection Times (ms)
                 min  mean[+/-sd] median   max
   Connect:        0    2   2.7      2      15
   Processing:     1    7   4.7      5      18
   Waiting:        1    6   4.6      4      18
   Total:          2    9   5.0      7      20
   
   Percentage of the requests served within a certain time (ms)
     50%      7
     66%      9
     75%     15
     80%     15
     90%     17
     95%     19
     98%     20
     99%     20
    100%     20 (longest request)
   ```

4. Настройки кэширования и gzip сжатия файлов. Конфиг

   ```
   http {
       proxy_cache_path /data/cache/nginx levels=1:2 keys_zone=all:32m max_size=1g;
   
       server {
           listen 80;
   
           location / {
                   proxy_pass http://127.0.0.1:81/;
                   proxy_cache all;
                   proxy_cache_valid any 1h;
                   proxy_cache_valid 404 502 503 1m;
           }
       }
   
       server {
           listen 81;
   
           gzip on;
           gzip_comp_level 5;
   
           location / {
                   root /data/static/html;
           }
           location /img {
                   root /data/static;
           }
       }
   }
   ```

   Скорость:

   ```
   Server Software:        nginx/1.14.2
   Server Hostname:        localhost
   Server Port:            80
   
   Document Path:          /
   Document Length:        105 bytes
   
   Concurrency Level:      10
   Time taken for tests:   0.097 seconds
   Complete requests:      100
   Failed requests:        0
   Total transferred:      33700 bytes
   HTML transferred:       10500 bytes
   Requests per second:    1035.81 [#/sec] (mean)
   Time per request:       9.654 [ms] (mean)
   Time per request:       0.965 [ms] (mean, across all concurrent requests)
   Transfer rate:          340.89 [Kbytes/sec] received
   
   Connection Times (ms)
                 min  mean[+/-sd] median   max
   Connect:        0    1   1.8      0       9
   Processing:     1    8   6.6      4      23
   Waiting:        1    7   6.6      4      23
   Total:          2    9   6.7      7      25
   
   Percentage of the requests served within a certain time (ms)
     50%      7
     66%      9
     75%     14
     80%     15
     90%     20
     95%     23
     98%     23
     99%     25
    100%     25 (longest request)
   ```

5. Запустить 3 сервера nodejs и балансировать запросы 3:1 

   ```
   http {
       upstream backend {
           server localhost:3001 weight=3;
           server localhost:3002;
           server localhost:3003;
       }
   
       server {
           location / {
                   proxy_pass http://backend;
           }
       }
   }
   ```

6. Конфиг

   ```
   http {
      server {
           listen 3000;
           location /service1 {
                   proxy_pass http://localhost:3001/;
           }
           location /service2 {
                   proxy_pass http://localhost:3002/;
           }
      }
      server {
           listen 3001;
           server_name static.first.ru;
           location / {
                   root /temp;
                   index index1.html;
           }
           location /temp {
                   root /;
           }
      }
      server {
           listen 3002;
           server_name static.second.ru;
           location / {
                   root /temp;
                   index index2.html;
           }
           location /temp {
                   root /;
   
           }
      }
   }
   ```

7. Конфигурация, добавил в сервер на 3000 порту

   ```
   location / {
                   stub_status;
           }
   ```

   ```
   Active connections: 1 
   server accepts handled requests
    3 3 3 
   Reading: 0 Writing: 1 Waiting: 0
   ```

   

