export default {
	props: {
		// 默认的显示占位高度
		showHeight: {
			type: [Number, String],
			default: 400
		},
		// 展开后是否显示"收起"按钮
		toggle: {
			type: Boolean,
			default: false
		},
		// 关闭时的提示文字
		closeText: {
			type: String,
			default: '展开阅读全文'
		},
		// 展开时的提示文字
		openText: {
			type: String,
			default: '收起'
		},
		// 提示的文字颜色
		color: {
			type: String,
			default: '#2979ff'
		},
		// 提示文字的大小
		fontSize: {
			type: [String, Number],
			default: 14
		},
		// 是否显示阴影
		shadowStyle: {
			type: Object,
			default () {
				return {
					backgroundImage: "linear-gradient(to top, #fff, rgba(255, 255, 255, 0.5))",
					paddingTop: "100px",
					marginTop: "-100px"
				}
			}
		},
		// open和close事件时，将此参数返回在回调参数中
		index: {
			type: [Number, String],
			default: ''
		}
	}
}