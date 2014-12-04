##文献阅读笔记-1
###(Evolutionary Network Analysis: A Survey)

------

>####背景: 
进化网络分析在最近的学术研究中越来越热。因为各种类型的网络都具有重要的研究价值。这些网络包括：社交网络，电子邮件网络，生物网络和社交流。
>
当一个网络进化后，对应于这个网络的数据挖掘算法就要相应地进行更新。更进一步，当网络的关键结构发生改变，例如社区结构或者网络结构参数（例如结点的度）发生重大改变时，也需要进行相应的分析。一些网络有很高的边到达（更新）速率，这就涉及到**网络流**或者**图流**。这种网络的分析非常具有挑战性，因为它需要实现在线的功能，在单向数据流的约束下。内容的合并增长会增加后面进化分析程序的复杂度。这篇调研给出了众多文献里关于图进化分析的一个概括，和大量在不同环境中产生的应用。

####1.介绍:
进化网络出现在许多应用领域，比如WEB，社交网络和通讯网络。网络有时候会提到图，在配方网络和图将会被同等对待地讨论。

图进化分析有许多的应用场景，例如社交网络中的趋势预测（相关文献：
- Modeling blog dynamics 2009
- The dynamics of viral marketing 2007
- Continuous subgraph pattern search over graph streams 2009
- On dynamic link inference in heterogeneous networks 2012
-  Event detection in social streams 2012  
），和动态链接预测。大部网络进化的方式多种多样，同时产生了不同种类的进货语义。  
进化网络分析大致可分为两类：
- **维持方法（Maintenance Methods）**：在这种方法中， 持续地维持（保存）随着时间推移数据挖掘程序所产生的结果。例如一个分类方法的结果会随着图的结构的改变而改变。因此。分类方法的结果会随着时间的推进而过时，Maintenance Methods的目标是保持最终结果为最新。相应的，能够提供措施来连续性地和递增性地管理这些随着时间推进而产生的结果。
- **解析性进化分析（Analytical Evolution Analysis）**：在这种方法中，直接对图底层发生的改变进行量化分析和理解。这个方法的主要点是对图的改变进行建模，而不是修正和调整网络中数据挖掘结果的最新值。这种直接的进化分析与暂时网络中的离群者探测紧密相关，因为暂时的离群者通常定义为一系列的改变点。

不同图的更新速率各不相同 ，例如email网络的更新率以秒为单位，而文献类型网络的更新速率以周或月为时间单位。按照更新速率图进化分为两类：
- **慢进化网络**：在这种情形中，网络进货得比较慢，快照分析可以很好地应用。不同时间点的网络快照可以用来分析，而且也可直接进行离线分析。
- **流式网络**：很多网络是由短暂交互而产生的，例如email网络和电信网络。这些网络可以表示为图流。图流往往需要实时的分析方法。这个场景远远比慢进化网络分析具有挑战，因为与计算有关的需求以及不能将整个图存储在硬盘上。这种场景出现在流式对象，流式边，和流式关联数据的环境中。

####2.应用分类:
| 领域        |    相关文献 |
| :--------: | :--------: |
| World Wide Web    | **[Evolution of Networks: From Biological Nets to the Internet and WWW.** 2003] [**Web graph similarity for anomaly detection.** 2010] [**Discovering correlated spatio-temporal changes in evolving graphs.** 2008] [Visualizing the evolution of web ecologies. 1998]    |
| Telecommunication Networks | [Liu et al. 2011] [De Melo et al. 2010] [Akoglu and Faloutsos 2010] [Akoglu and Dalvi 2010] |
| Communication Networks | [Chan et al. 2008] [Huang and Lin 2009] |
| Road Networks | [Mongiovi et al. 2013] [Bogdanov et al. 2011] |
| Recommendations | [Huang et al. 2005] [Aggarwal et al. 2012b] [Leskovec et al. 2007] [Aggarwal et al. 2012a] [Richardson and Domingos 2002] [Sarkar et al. 2012] [Tylenda et al. 2009] [Huang and Lin 2009] |
| **Social Network Events** | [**Event detection in social streams. 2012** ] [**Event detection and tracking in social streams.** 2009] [Earthquake shakes Twitter users: Real-time event detection by social sensors. 2010] [Temporal and information flow based event detection from social text streams. 2007] [Detection of anomalous meetings in a social network. 2008] [Fast mining of complex time-stamped events. 2008c] [**A statistical model for popular events tracking in social communities.** 2010] [CopyCatch: Stopping group attacks by spotting lockstep behavior in social networks. 2013] |
| Blog Evolution | [Ning et al. 2007] [McGlohon et al. 2007] [Goetz et al. 2009] [Leskovec et al. 2007] |
| **Computer Systems** | [**Eigenspace-based anomaly detection in computer systems.** 2004] [Topology of evolving networks: Local events and universality. 2000] |
| News Networks | [Yan et al. 2012] [Leskovec et al. 2009] |
| Bibliographic Networks | [Gupta et al. 2011b] [Chen 2006] [Sun et al. 2011] [Barabˆ asi et al. 2002]|
| Biological Networks | [V´ azquez et al. 2002] [Sol´ e et al. 2002] [Asur et al. 2007] [Dorogovtsev and Mendes 2003] [Teichmann and Babu 2004] [Stuart et al. 2003] [Beyer et al. 2010] |