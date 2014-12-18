##文献筛选列表 (graph stream)
###1.Towards large-scale graph stream processing platform
(Proceeding
WWW Companion '14 Proceedings of the companion publication of the 23rd international conference on World wide web companion
Pages 1321-1326 )

**Abstract:**  
In recent years, real-time data mining for large-scale time-evolving graphs is becoming a hot research topic. Most of the prior arts target relatively static graphs and also process them in store-and-process batch processing model. In this paper we propose a method of applying on-the-fly and incremental graph stream computing model to such dynamic graph analysis. To process large-scale graph streams on a cluster of nodes dynamically in a scalable fashion, we propose an incremental large-scale graph processing model called "Incremental GIM-V (Generalized Iterative Matrix-Vector Multiplication)". We also design and implement UNICORN, a system that adopts the proposed incremental processing model on top of IBM InfoSphere Streams. Our performance evaluation demonstrates that our method achieves up to 48% speedup on PageRank with Scale 16 Log-normal Graph (vertexes=65,536, edges=8,364,525) with 4 nodes, 3023% speedup on Random walk with Restart with Kronecker Graph with Scale 18 (vertexes=262,144, edges=8,388,608) with 4 nodes against original GIM-V.

###2.Space-efficient sampling from social activity streams
(Proceeding
BigMine '12 Proceedings of the 1st International Workshop on Big Data, Streams and Heterogeneous Source Mining: Algorithms, Systems, Programming Models and Applications)

**Abstract:**  
In order to efficiently study the characteristics of network domains and support development of network systems (e.g. algorithms, protocols that operate on networks), it is often necessary to sample a representative subgraph from a large complex network. Although recent subgraph sampling methods have been shown to work well, they focus on sampling from memory-resident graphs and assume that the sampling algorithm can access the entire graph in order to decide which nodes/edges to select. Many large-scale network datasets, however, are too large and/or dynamic to be processed using main memory (e.g., email, tweets, wall posts). In this work, we formulate the problem of sampling from large graph streams. We propose a streaming graph sampling algorithm that dynamically maintains a representative sample in a reservoir based setting. We evaluate the efficacy of our proposed methods empirically using several real-world data sets. Across all datasets, we found that our method produce samples that preserve better the original graph distributions.

**data set url**
[http://snap.stanford.edu/data/](http://snap.stanford.edu/data/)

###3.PageRank on an Evolving Graph
(Proceeding
KDD '12 Proceedings of the 18th ACM SIGKDD international conference on Knowledge discovery and data mining
Pages 24-32 )

**Abstract:**  
One of the most important features of the Web graph and social networks is that they are constantly evolving. The classical computational paradigm, which assumes a fixed data set as an input to an algorithm that terminates, is inadequate for such settings. In this paper we study the problem of computing PageRank on an evolving graph. We propose an algorithm that, at any moment in the time and by crawling a small portion of the graph, provides an estimate of the PageRank that is close to the true PageRank of the graph at that moment. We will also evaluate our algorithm experimentally on real data sets and on randomly generated inputs. Under a stylized model of graph evolution, we show that our algorithm achieves a provable performance guarantee that is significantly better than the naive algorithm that crawls the nodes in a round-robin fashion.