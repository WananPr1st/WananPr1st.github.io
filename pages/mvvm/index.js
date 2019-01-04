// 创建一个Observer函数
// 写数据劫持的主要逻辑
function Observer(data) {
    // 所谓数据劫持就是给对象增加get, set
    // 先遍历一遍对象
    for (let key in data) {// 把data属性通过defineProperty的方式定义属性
        let val = data[key];
        observer(val); // 递归继续向下查找，实现深度数据劫持
        Object.defineProperty(data, key, {
            configurable: true,
            get() {
                return val;
            },
            set(newVal) {// 更改值的时候
                if (val === newVal) { //
                    return;
                }
                val = newVal; // 如果以后再获取值(get)的时候，将刚才设置的值再返回去
                observer(newVal); // 当设置为新值后，也需要把新值再去定义成属性
            }
        })
    }
}

// 外面再写一个函数
// 不用每次调用都写个new
// 也方便递归调用
function observe(data) {
    // 如果不是对象的话就直接return
    // 防止递归溢出
    if (!data || typeof data !== 'object') return;
    return new Observer(data);
}