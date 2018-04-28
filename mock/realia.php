<?php

require("./bootstrap.php");

render(
    "shuangshi/login",
    array(
        "tpl_data" => array(
            "room_id" => "18041791884977",
            "partner_config" => array(
                "partner_id" => "37102096",
                "logo_prefix" => ""
            ),
            "title" => "双师小班课",
            "e" => "EP0Ec2JoQoeB7Buh6A4rqiqXAYxJUNMMuylQ-pPPT-8avGEmcIZ4KKUQsIuMcbH5TqfQjkA8sMI"
        ),
        "site_config" => array(
           "env" => "test"
        )
    )
);
