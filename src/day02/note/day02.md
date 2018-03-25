## day02笔记

1. React组件设计的要素

    高内聚 低耦合


2. React 组件的数据

   react的数据分为两种:props 和 state

   props:为组件对外的接口

   state:为组件内部维护的状态

   **注意:**

   当标签中的不是字符串类型的时候需要用{}进行包裹

   React的render函数是一个纯函数,要求只能返回一个标签


3. props

    组件内部是绝对不能进行修改的

    如果在构造函数中没有调用Super(props),那么组件实例被构造出来以后,类实例的所
    有成员就无法通过this.props访问组件传递过来的props值

    类型检查:

    声明对外需要传入的类型

    ```
    //默认类型检查  只是起一个提示作用
    Counter.propTypes = {
        initValue: PropTypes.number,
        counterName: PropTypes.string.isRequired
    };

    //设置默认值
    Counter.defaultProps = {
        initValue:20
    };
    ```

 4. state

    state必须是一个复杂对象,不能是简单字符串数字这种

    访问组件状态用this.state,修改状态只能用this.setState();


 5. state 和 props的区别

    * props用对对外接口,state用于记录内部状态
    * props的赋值在外部世界使用组件时,state的赋值在组件内部
    * 组件内部不应该去改变props的值,而state存在的目的就是让组件来修改的


    UI = render(data)

 6. 组件的生命周期

    * 装载过程
        ```
            coustructor(props)//并不是每个组件都需要counstructor,有coustructor的
                                一般有两个目的 1.初始化state 2.绑定this
            getInitialState()
            getDefaultProps()//上边这两个方法已经被废弃

            componetWillMount()  //在render之前被调用,但这个时候界面并没有被渲染出来,
                                    故一般不对其进行定义,可在服务器端被调用
            render()        //这个是React中最重要的函数,返回一个JSX供React进行渲染
            componentDidMount() //在render之后被调用,但并不是立马被调用.
                                    只能在浏览器端被调用
        ```
    * 更新过程(每个React组件都可以通过foreUpdate函数强制执行引发一次重绘)
        ```
            componentWillReceiveProps(nextProps)//只要是父组件render被调用
                                在render中被渲染的子组件都会经历这个过程,不管父组件传入的props是否改变
                                this.setState()是不会触发这个函数的

            shouldComponentUpdate(nextProps,nextState)//返回false/true决定react是否进行渲染

            componentWillUpdate()
            componentDidUpdate()

        ```
    * 卸载过程

        ```
            componentWillUnmount()//对react组件进行一些清理工作
        ```
