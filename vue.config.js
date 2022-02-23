module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // '@': 'src',  默认
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'views': '@/views',
                'components': '@/components'
            }
        }
    }
}