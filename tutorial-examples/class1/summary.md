# 要点总结

训练机器学习模型的步骤：

### 1. 制定任务

- 是回归问题还是分类问题？ regression or classification?
- 是通过监督式学习还是非监督式学习？supervised learning?
- 输入数据的形状是什么？输出数据应该是怎样的？

### 2. 准备数据

- 筛选数据并手动查看是否存在可学习的模式
- 在使用数据进行训练前对数据进行重排
- 将数据归一化为神经网络的合理范围，通常对于数值数据，0-1或-1-1是合适的范围。
- 将数据转换成张量(tensor)

### 3. 构建并运行模型

- 使用<code>tf.sequential</code>或<code>tf.model</code>定义模型，然后使用<code>tf.layers.*</code>向模型中添加Layers
- 选择优化器optimizer(adam通常是一个很不错的选择),设置批次大小batchSize和周期数epoch等参数
- 选择何时的损失函数(loss),并选择准确率治标来评估进度，<code>meanSquaredError</code>是处理回归问题的常见损失函数
- 监控训练，看看损失是否降低

### 4. 评估模型

- 选择评估指标，在训练过程中对模型进行监控。在完成后尝试预测来了解预测质量。
  
