const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm737jq/",
            name: "ssm737jq",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm737jq/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的新生报到系统"
        } 
    }
}
export default base
