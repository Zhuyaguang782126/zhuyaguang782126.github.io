"use strict";(self.webpackChunkbyconity=self.webpackChunkbyconity||[]).push([[840],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(4778),i=(t(9496),t(9613));const r={slug:"2023-08-22-RoCE-on-kubernetes",date:new Date("2023-08-22T00:00:00.000Z"),title:"\u5728 k8s \u4e0a\u4f7f\u7528 RoCE \u7f51\u7edc",authors:["zhuyaguang"],tags:["video introduction","docusaurus"],keywords:["k8s","RDMA","RoCE"]},l=void 0,s={permalink:"/blog/2023-08-22-RoCE-on-kubernetes",editUrl:"https://github.com/ByConity/byconity.github.io/tree/main/blog/2023-08-22-RoCE-on-kubernetes/index.md",source:"@site/blog/2023-08-22-RoCE-on-kubernetes/index.md",title:"\u5728 k8s \u4e0a\u4f7f\u7528 RoCE \u7f51\u7edc",description:"\u90e8\u7f72 k8s \u96c6\u7fa4",date:"2023-08-22T00:00:00.000Z",formattedDate:"2023\u5e748\u670822\u65e5",tags:[{label:"video introduction",permalink:"/blog/tags/video-introduction"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:3.245,hasTruncateMarker:!1,authors:[{name:"\u6731\u4e9a\u5149",title:"\u667a\u80fd\u539f\u751f\u793e\u533a\u6210\u5458",url:"https://github.com/zhuyaguang",imageURL:"https://github.com/zhuyaguang.png",key:"zhuyaguang"}],frontMatter:{slug:"2023-08-22-RoCE-on-kubernetes",date:"2023-08-22T00:00:00.000Z",title:"\u5728 k8s \u4e0a\u4f7f\u7528 RoCE \u7f51\u7edc",authors:["zhuyaguang"],tags:["video introduction","docusaurus"],keywords:["k8s","RDMA","RoCE"]}},o={authorsImageUrls:[void 0]},p=[{value:"\u90e8\u7f72 k8s \u96c6\u7fa4",id:"\u90e8\u7f72-k8s-\u96c6\u7fa4",level:2},{value:"\u90e8\u7f72 k8s-device-plugin",id:"\u90e8\u7f72-k8s-device-plugin",level:2},{value:"\u90e8\u7f72 RDMA \u63d2\u4ef6",id:"\u90e8\u7f72-rdma-\u63d2\u4ef6",level:2},{value:"\u65b9\u6848\u4e00\uff1a\u4f7f\u7528\u963f\u91cc\u7684\u955c\u50cf",id:"\u65b9\u6848\u4e00\u4f7f\u7528\u963f\u91cc\u7684\u955c\u50cf",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:3},{value:"\u65b9\u6848\u4e8c k8s-rdma-shared-dev-plugin",id:"\u65b9\u6848\u4e8c-k8s-rdma-shared-dev-plugin",level:3},{value:"\u65b9\u6848\u4e8c \u6d4b\u8bd5",id:"\u65b9\u6848\u4e8c-\u6d4b\u8bd5",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",level:2},{value:"device plugin",id:"device-plugin",level:3}],d={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u90e8\u7f72-k8s-\u96c6\u7fa4"},"\u90e8\u7f72 k8s \u96c6\u7fa4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9009\u62e9 \u5408\u9002\u7684 \u5bb9\u5668\u7f51\u7edc")),(0,i.kt)("h2",{id:"\u90e8\u7f72-k8s-device-plugin"},"\u90e8\u7f72 k8s-device-plugin"),(0,i.kt)("p",null,"\u9009\u62e9\u6700\u65b0\u7684\u7248\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NVIDIA/k8s-device-plugin"},"https://github.com/NVIDIA/k8s-device-plugin"))),(0,i.kt)("h2",{id:"\u90e8\u7f72-rdma-\u63d2\u4ef6"},"\u90e8\u7f72 RDMA \u63d2\u4ef6"),(0,i.kt)("h3",{id:"\u65b9\u6848\u4e00\u4f7f\u7528\u963f\u91cc\u7684\u955c\u50cf"},"\u65b9\u6848\u4e00\uff1a\u4f7f\u7528\u963f\u91cc\u7684\u955c\u50cf"),(0,i.kt)("p",null,"\u6765\u81ea\u6587\u7ae0\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/664961"},"\u5728 Kubernetes \u4e0a\u4f7f\u7528 RDMA")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: rdma-devices\n  namespace: kube-system\ndata:\n  config.json: |\n    {\n        "mode" : "hca"\n    }\n\n---\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: rdma-device-plugin\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      name: rdma-sriov-dp-ds\n  template:\n    metadata:\n      annotations:\n        scheduler.alpha.kubernetes.io/critical-pod: \'\'\n      labels:\n        name: rdma-sriov-dp-ds\n    spec:\n      hostNetwork: true\n      tolerations:\n        - key: CriticalAddonsOnly\n          operator: Exists\n      containers:\n        - image: registry.cn-shanghai.aliyuncs.com/acs/rdma-device-plugin\n          name: k8s-rdma-device-plugin\n          imagePullPolicy: IfNotPresent\n          securityContext:\n            privileged: true\n          volumeMounts:\n            - name: device-plugin\n              mountPath: /var/lib/kubelet/device-plugins\n            - name: config\n              mountPath: /k8s-rdma-sriov-dev-plugin\n      volumes:\n        - name: device-plugin\n          hostPath:\n            path: /var/lib/kubelet/device-plugins\n        - name: config\n          configMap:\n            name: rdma-devices\n            items:\n              - key: config.json\n                path: config.json\n')),(0,i.kt)("h3",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,i.kt)("p",null,"\u955c\u50cf\u7248\u672c\u592a\u8001\u4e86\uff0c\u800c\u4e14\u6ca1\u6709 device plugin \u7684\u6e90\u4ee3\u7801\uff0c\u65e0\u6cd5\u7ef4\u62a4\u3002\u4f46\u662f\u8bbe\u7f6e hostNetwork pod \u662f\u53ef\u4ee5 running \u8d77\u6765\u7684\uff0c\u8282\u70b9\u4e0a\u4e5f\u6709 hca \u8d44\u6e90\u3002\u6240\u4ee5\u8be5\u65b9\u6848\u4e0d\u63a8\u8350\uff01"),(0,i.kt)("h3",{id:"\u65b9\u6848\u4e8c-k8s-rdma-shared-dev-plugin"},"\u65b9\u6848\u4e8c k8s-rdma-shared-dev-plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: rdma-devices\n  namespace: kube-system\ndata:\n  config.json: |\n    {\n        "periodicUpdateInterval": 300,\n        "configList": [\n           {\n             "resourceName": "hca_shared_devices_b",\n             "rdmaHcaMax": 500,\n             "selectors": {\n               "deviceIDs": ["101b"]\n             }\n           }\n        ]\n    }\n\n---\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: rdma-shared-dp-ds\n  namespace: kube-system\nspec:\n  selector:\n    matchLabels:\n      name: rdma-shared-dp-ds\n  template:\n    metadata:\n      labels:\n        name: rdma-shared-dp-ds\n    spec:\n      hostNetwork: true\n      priorityClassName: system-node-critical\n      containers:\n        - image: ghcr.io/mellanox/k8s-rdma-shared-dev-plugin\n          name: k8s-rdma-shared-dp-ds\n          imagePullPolicy: IfNotPresent\n          securityContext:\n            privileged: true\n          volumeMounts:\n            - name: device-plugin\n              mountPath: /var/lib/kubelet/\n            - name: config\n              mountPath: /k8s-rdma-shared-dev-plugin\n            - name: devs\n              mountPath: /dev/\n      volumes:\n        - name: device-plugin\n          hostPath:\n            path: /var/lib/kubelet/\n        - name: config\n          configMap:\n            name: rdma-devices\n            items:\n              - key: config.json\n                path: config.json\n        - name: devs\n          hostPath:\n            path: /dev/\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'\u4e0a\u9762\u914d\u7f6e\u4e2d\uff0c"deviceIDs": ','["101b"]'," \u901a\u8fc7 cat /sys/class/infiniband/mlx5_2/device/device \u547d\u4ee4\u67e5\u51fa\u6765\u3002")),(0,i.kt)("p",null,"\u5982\u4f55\u5224\u65ad\uff0cdevice plugin \u5b89\u88c5\u6210\u529f\u5462\uff0cdescribe node \u53d1\u73b0\u8d44\u6e90\u6302\u8f7d\u6210\u529f\u5c31\u53ef\u4ee5\u4e86"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821142528961.png",alt:"image-20230821142528961"})),(0,i.kt)("h3",{id:"\u65b9\u6848\u4e8c-\u6d4b\u8bd5"},"\u65b9\u6848\u4e8c \u6d4b\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: mofed-test-pod\nspec:\n  restartPolicy: OnFailure\n  nodeName: 10.106.124.3\n  hostNetwork: true\n  containers:\n    - image: mellanox/rping-test\n      name: mofed-test-ctr\n      securityContext:\n        capabilities:\n          add: ['IPC_LOCK']\n      resources:\n        limits:\n          rdma/hca_shared_devices_b: 1\n      command:\n        - sh\n        - -c\n        - |\n          ls -l /dev/infiniband /sys/class/infiniband /sys/class/net\n          sleep 1000000\n\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: mofed-test-pod2\nspec:\n  restartPolicy: OnFailure\n  nodeName: 10.106.124.4\n  hostNetwork: true\n  containers:\n    - image: mellanox/rping-test\n      name: mofed-test-ctr\n      securityContext:\n        capabilities:\n          add: ['IPC_LOCK']\n      resources:\n        limits:\n          rdma/hca_shared_devices_b: 1\n      command:\n        - sh\n        - -c\n        - |\n          ls -l /dev/infiniband /sys/class/infiniband /sys/class/net\n          sleep 1000000\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u547d\u4ee4 1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ib\\_read\\_bw -q 30\n\nib\\_read\\_bw -q 30 10.106.156.3\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821142703589.png",alt:"image-20230821142703589"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u547d\u4ee4 2")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ib_write_bw -d mlx5_2  -F --report_gbits\n\nib_write_bw -d mlx5_2 -F --report_gbits 10.106.156.3\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821143421094.png",alt:"image-20230821143421094"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821171553969.png",alt:"image-20230821171553969"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u547d\u4ee4 3"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"ib_send_bw -d mlx5_3 -i 1 -R --report_gbits\nib_send_bw -d mlx5_3 -i 1 -R --report_gbits 10.106.156.4\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u547d\u4ee4 4"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"ib_write_bw -d mlx5_3 -a -F\n\nib_write_bw  -F -d mlx5_3 10.233.92.6 -D 10 --cpu_util --report_gbits\n")))),(0,i.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u67e5\u770b\u5b58\u50a8 InfiniBand \u8bbe\u5907\u8282\u70b9\u7684\u76ee\u5f55"),(0,i.kt)("p",{parentName:"li"},"ls /dev/infiniband/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u67e5\u770b\u7f51\u5361"),(0,i.kt)("p",{parentName:"li"},"ibdev2netdev")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u67e5\u8be2\u7f51\u5361 IP"),(0,i.kt)("p",{parentName:"li"},"ip a show dev enp88s0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u67e5\u770b\u8bbe\u5907 ID"),(0,i.kt)("p",{parentName:"li"},"cat /sys/class/infiniband/mlx5_bond_0/device/device"),(0,i.kt)("p",{parentName:"li"},"cat /sys/class/infiniband/mlx5_2/device/device")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u67e5\u770b\u7f51\u5361\u578b\u53f7"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"lspci -s 0000:17:00.0")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821113834360.png",alt:"image-20230821113834360"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u67e5\u770b\u8bbe\u5907\u548c\u7f51\u5361"),(0,i.kt)("p",{parentName:"li"},"ls -la /dev/infiniband /sys/class/net")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u67e5\u8be2 InfiniBand\uff08IB\uff09\u8bbe\u5907\u7684\u72b6\u6001\u548c\u914d\u7f6e\u4fe1\u606f"),(0,i.kt)("p",{parentName:"li"},"ibv_devinfo"))),(0,i.kt)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/sunshuying1010/article/details/124951208"},"k8s RoCE \u90e8\u7f72: k8s-rdma-shared-dev-plugin + macvlan cni")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/664961"},"\u5728 Kubernetes \u4e0a\u4f7f\u7528 RDMA")),(0,i.kt)("h3",{id:"device-plugin"},"device plugin"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Mellanox/k8s-rdma-shared-dev-plugin"},"https://github.com/Mellanox/k8s-rdma-shared-dev-plugin")," \u63a8\u8350"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/k8snetworkplumbingwg/sriov-network-device-plugin"},"https://github.com/k8snetworkplumbingwg/sriov-network-device-plugin"))," \u725b\u54e5\u4f7f\u7528\u7684\uff0cstar \u6570\u6700\u9ad8"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/hustcat/k8s-rdma-device-plugin"},"https://github.com/hustcat/k8s-rdma-device-plugin")))}u.isMDXComponent=!0}}]);