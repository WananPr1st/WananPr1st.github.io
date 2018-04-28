<?php

define('ROOT_DIR', dirname(__DIR__) . DIRECTORY_SEPARATOR);
define('SMARTY_DIR', ROOT_DIR . 'mock' . DIRECTORY_SEPARATOR . 'smarty' . DIRECTORY_SEPARATOR);
define('VIEW_DIR', ROOT_DIR . 'view' . DIRECTORY_SEPARATOR);
define('CACHE_DIR', ROOT_DIR . 'cache' . DIRECTORY_SEPARATOR);
define('MOCK_DIR', ROOT_DIR . 'mock' . DIRECTORY_SEPARATOR);

date_default_timezone_set('PRC');

/**
 * 递归创建目录，如果目录不存在的话，则创建之
 *
 * @param $dir 要创建的目录
 * @return bool
 */
function mkdir_if_no_exist($dir) {
    if (is_dir($dir)) {
        return true;
    }
    if (!mkdir_if_no_exist(dirname($dir))) {
        return false;
    }
    return mkdir($dir);
}

/**
 * 删除目录
 *
 * @param $dir
 */
function rrmdir($dir) {
    if (is_dir($dir)) {

        $dir = rtrim($dir, DIRECTORY_SEPARATOR . ' ') . DIRECTORY_SEPARATOR;
        $files = scandir($dir);

        foreach ($files as $file) {
            if ($file !== '.' && $file !== '..') {
                rrmdir($dir . $file);
            }
        }

        rmdir($dir);
    }
    else if (file_exists($dir)) {
        unlink($dir);
    }
}

function getSmarty($data) {

    require_once(SMARTY_DIR . 'Smarty.class.php');

    $smarty = new Smarty();

    $smarty->setTemplateDir(VIEW_DIR);
    $smarty->setCompileDir(CACHE_DIR);

    $smarty->left_delimiter = '{{ ';
    $smarty->right_delimiter = ' }}';

    $smarty->assign('user_data', array(

        "avatar" => "http://img.gsxservice.com/606547_ulq09b1u.jpeg",
        "user_type" => 0, // 0老师 2学生
        "user_id" => '2',

        // 刷新修改
        "user_number" => "874442028",
        // "user_number" => "874442011",
        "user_name" => "沈佳宜'沈'佳宜沈佳宜", // 废弃


        "user_name_cut" => "沈佳宜...", // 废弃

        "show_name" => "沈佳宜",  // 废弃
        "show_name_cut" => "",  // 废弃
        "display_name" => "沈佳宜思密达",
        "show_avatar" => "",

        "mobile" => "13523145687",
        "rank_activity_seniority" => 1,

        'favor_percent' => 40,
        'total_integral' => 225, // 老师学分
        'source_sys_id' => 888888,

        'qreserve_remind' => 1, // 闪电约课弹窗 0不再提醒 1提醒
        'qreserve_global_sign' => 1 // 开启全部老师闪电约课功能 1开启 0关闭
    ));

    $smarty->assign('ext_data', array(
        'has_checkin' => false, // 今日签到与否
        'checkin_serial_day' => 321, // 连续签到天数
        'teacher_center_notify' => array(
            array(
                'title' => '哈哈哈啊啊啊啊啊啊啊啊啊啊吖',
                'link' => 'http://baidu.com'
            ),
            array(
                'title' => '哈哈哈',
                'link' => 'http://baidu.com'
            ),
            array(
                'title' => '哈哈哈',
                'link' => 'http://baidu.com'
            ),
        )

    ));

    $smarty->assign('friend_links', array(
        array(
            "link" => "http://hao.360.cn",
            "title" => "360"
        ),
        array(
            "link" => "http://hao.360.cn",
            "title" => "360"
        )
    ));

    foreach ($data as $key => $value) {
        $smarty->assign($key, $value);
    }

    $smarty->assign('site_config', array(
        "env" => "test",
        "baseUri" => "//test-api.baijiayun.com",
        "staticBaseUri" => "http://" . $_SERVER['HTTP_HOST'] . '/',
        "staticBaseLiveUri" => "http://" . $_SERVER['HTTP_HOST'] . '/',
        "csrfTokenName" => '123',
        "csrfTokenValue" => '123',
        "sys" => 'baijiacloud',
        "staticBaseLiveUri" => "/"
    ));

    $smarty->assign('ts', time());

    return $smarty;
}

/**
 * 渲染模板
 *
 * @param {String} $tpl 模板路径，相对 view/
 * @param {Array} $data
 */
function render($tpl, $data) {
    echo fetch($tpl, $data);
};


/**
 * 渲染模板
 *
 * @param {String} $tpl 模板路径，相对 view/
 * @param {Array} $data
 * @return {String}
 */
function fetch($tpl, $data) {
    $smarty = getSmarty($data);
    $html = $smarty->fetch($tpl . '.html');

    $server_name = $_SERVER['SERVER_NAME'];

    // $livereload = '<script src="http://localhost:8898/livereload.js"></script></body>';
    $livereload = '';

    $html = str_replace('</body>', $livereload, $html);

    return $html;
};
