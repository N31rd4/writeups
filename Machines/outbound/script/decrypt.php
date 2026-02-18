<?php
    function decrypt($cipher, $key = 'des_key', $base64 = true)
    {
        // @phpstan-ignore-next-line
        if (!is_string($cipher) || !strlen($cipher)) {
            return false;
        }

        if ($base64) {
            $cipher = base64_decode($cipher);
            if ($cipher === false) {
                return false;
            }
        }

        $ckey    = $key;
        $method  = 'DES-EDE3-CBC';
        $iv_size = openssl_cipher_iv_length($method);
        $tag     = null;

        if (preg_match('/^##(.{16})##/s', $cipher, $matches)) {
            $tag    = $matches[1];
            $cipher = substr($cipher, strlen($matches[0]));
        }

        $iv = substr($cipher, 0, $iv_size);

        // session corruption? (#1485970)
        if (strlen($iv) < $iv_size) {
            return false;
        }

        $cipher = substr($cipher, $iv_size);
        $clear  = openssl_decrypt($cipher, $method, $ckey, OPENSSL_RAW_DATA, $iv, $tag);

        return $clear;
    };
echo(decrypt("L7Rv00A8TuwJAr67kITxxcSgnIk25Am/", "rcmail-!24ByteDESkey*Str"));