<?php 
	@ob_start();
	session_start();
	if(!empty($_SESSION['admin'])){ }else{
		echo '<script>window.location="login.php";</script>';
        exit;
	}
	require 'config.php';
	include $view;
	$lihat = new view($config);
	$toko = $lihat -> toko();
	$hsl = $lihat -> penjualan();

	function genLine($length = 50) {
		return str_repeat('=', $length);
	}
	
?>
<html>
    <head>
        <title>Receipt Print</title>
        <link rel="stylesheet" href="assets/css/bootstrap.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <style>
            body {
                font-family: Arial, sans-serif;
                font-size: 14px;
                max-width: 300px;
                margin: 0 auto;
                text-align: center;
            }

            .header {
                font-size: 18px;
                margin-bottom: 20px;
            }

            .date {
                margin-bottom: 10px;
                font-size: 12px;
            }

            hr {
                border: none;
                border-top: 2px dotted #000;
                margin: 10px 0;
            }

            table {
                width: 100%;
                text-align: left;
                font-size: 12px;
                border-collapse: collapse;
                margin-bottom: 20px;
            }

            .table-item td {
                padding: 8px 0;
            }

            .pull-right {
                text-align: right;
                margin-top: 10px;
            }

            .footer {
                margin-top: 20px;
                font-size: 12px;
            }

            .footer i {
                font-size: 16px;
                margin-right: 5px;
            }

            @media print {
                body {
                    font-size: 12px;
                }
                table {
                    width: 100%;
                    font-size: 12px;
                }
                .pull-right {
                    font-size: 12px;
                }
            }
        </style>
    </head>
    <body>
        <script>window.print();</script> 
        <div class="container">
            <div class="header">
                <img src="/assets/images/oge.png" alt="Logo" style="max-width: 100px;">
                <p><strong><?php echo $toko['nama_toko']; ?></strong></p>
                <p><?php echo $toko['alamat_toko']; ?></p>
            </div>

            <div class="date">
                <p>Date receipt: <?php echo date("d F Y"); ?></p>
            </div>

            <hr>

            <table class="table-item">
                <tr>
                    <td>No.</td>
                    <td>Item</td>
                    <td>Qty</td>
                    <td>Price</td>
                </tr>
                <?php $no=1; foreach($hsl as $isi){?>
                <tr>
                    <td><?php echo $no;?></td>
                    <td><?php echo $isi['nama_barang'];?></td>
                    <td><?php echo $isi['jumlah'];?></td>
                    <td>Rp<?php echo number_format($isi['total'], 0, ',', '.');?></td>
                </tr>
                <?php $no++; }?>
            </table>

            <hr>

            <div class="pull-right">
                <?php $hasil = $lihat -> jumlah(); ?>
                <p>Total: Rp<?php echo number_format($hasil['bayar'], 0, ',', '.');?>,00</p>
                <p>Tunai: Rp<?php echo number_format(htmlentities($_GET['bayar']), 0, ',', '.');?>,00</p>
                <p>Kembali: Rp<?php echo number_format(htmlentities($_GET['kembali']), 0, ',', '.');?>,00</p>
            </div>

            <div class="footer">
                <p>Terima Kasih Telah Berbelanja di Toko Kami!</p>
				<p>Note: Garansi 3 hari untuk Tempered Glass/Anti Gores</p>
                <p>
                    <i class="fab fa-instagram"></i> ogecase.bontang | 
                    <i class="fab fa-whatsapp"></i> +62 816 4949 2467
                </p>
            </div>
        </div>
    </body>
</html>
