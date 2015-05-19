###流式图抽样背景调研

testasd
####1.Space-Efficient Sampling from Social Activity Streams
(Proceeding BigMine '12 Proceedings of the 1st International Workshop on Big Data, Streams and Heterogeneous Source Mining: Algorithms, Systems, Programming Models and Applications)  

**background**  
Many real-world complex systems can be represented as graphs
and networks—from information networks, to communication networks, to biological networks. Naturally, there has been a lot of interest in studying characteristics of these networks, modeling their
structure, as well as developing algorithms and systems that operate
on the networks. While the recent surge in activity in online social
networks (e.g., Facebook, Twitter) has prompted a similar need for
characterization and modeling efforts, it is often much harder than
in traditional networks due to their size. Specifically, these networks tend to be too large to efficiently acquire, store and/or analyze (e.g., one billion chat messages per day in Facebook [35]). It
is therefore often necessary to sample smaller subgraphs from the
larger network structure, that can then be used to investigate the
characteristics and properties of the larger network. It can also be
used to drive realistic simulations and experimentation before deploying new protocols and systems in the field—for example, new
Internet protocols, social/viral marketing schemes, and/or fraud detection algorithms.

**背景大意**  
许多真实复杂的系统可以表示为图和网络。从信息网络，到社交网络，到生物学网络。自然地，有很多关于这些网络的特征的研究，对它们的结构进行建模，同时在这些网络上面实现一些算法和系统。  
近来Facebook和Twitter等在线社交网络中激增的用户行为引出了对网络进行特征分析和建模的相似需求。在这种情况中，由于网络的庞大尺寸，与普通的网络比较起来要困难得多。具体来说，这些网络太大以至于不能高效地被获取、存储和分析。因此经常需要从原来大的网络结构中抽样出小一些的子图，抽样出的小子图可以用来原图的特征和属性。也可以用来在某个领域应用某种新的协议或系统前进行真实性实验和估计。例如新的因特网协议，新的社交营销策略和一些探测算法。  


###2.Sampling from Large Graphs
（Proceeding
KDD '06 Proceedings of the 12th ACM SIGKDD international conference on Knowledge discovery and data mining
Pages 631-636 ）

**background**  
Given a large massive graph with millions or billions of
nodes, how can we create a small, but “good” sample out
of it? In many applications we need to run expensive algorithms, like simulations of internet routing protocols, peerto-peer gossip-like protocols, virus propagation and immunization policies, or analysis of “viral marketing” scenarios.  
For example, in studies of Internet routing protocols computer communication researchers would like to do detailed
simulations of BGP (Border Gateway Protocol), or flow level
simulations, but the simulations on networks with more than
a few thousand nodes may be prohibitively expensive 

