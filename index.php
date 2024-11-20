<?php 
@ob_start();
session_start();

// Jika pengguna belum login, arahkan ke login.php
if(empty($_SESSION['admin'])){
    header('Location: login.php');
    exit;
}

// Jika pengguna sudah login, lanjutkan ke halaman admin
require 'config.php';
include $view;
$lihat = new view($config);
$toko = $lihat -> toko();

// Admin template
include 'admin/template/header.php';
include 'admin/template/sidebar.php';

if(!empty($_GET['page'])){
    include 'admin/module/'.$_GET['page'].'/index.php';
} else {
    include 'admin/template/home.php';
}

include 'admin/template/footer.php';
?>
