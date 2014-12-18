##文献筛选列表 (evolution network)

###1.The predictive value of young and old links in a social network
(Proceeding
DBSocial '13 Proceedings of the ACM SIGMOD Workshop on Databases and Social Networks)

**Abstract:**  
Recent studies show that vertex similarity measures are good
at predicting link formation over the near term, but are less
effective in predicting over the long term. This indicates
that, generally, as links age, their degree of influence diminishes. However, few papers have systematically studied this
phenomenon. In this paper, we apply a supervised learning
approach to study age as a factor for link formation. Experiments on several real-world datasets show that younger
links are more informative than older ones in predicting the
formation of new links. Since older links become less useful,
it might be appropriate to remove them when studying network evolution. Several previously observed network properties and network evolution phenomena, such as “the number
of edges grows super-linearly in the number of nodes” and
“the diameter is decreasing as the network grows”, may need
to be reconsidered under a dynamic network model where
old, inactive links are removed.

**Keywords:**  
Vertex Similarity, Network Revolution, Link Prediction, Link
Analysis, Densification Power-law, Graph Theory

###2.Identifying small subsets of agents for behavior tracking and abnormal event detection in dynamic networks
(Proceeding
DyNetMM '13 Proceedings of the Workshop on Dynamic Networks Management and Mining)

**Abstract:**  
For very large dynamic networks, monitoring the behavior of a subset of agents provides an efficient framework for detecting changes in network topology. For example, in mobile caller networks with millions of subscribers, we would like to monitor the dynamics of the smallest possible set of subscribers and still be able to infer abnormal events that occur over the entire network. In general, we assume that the temporal behavior of a network agent is captured by a (local) dynamic state, which may reflect either a physical property such as the number of connections or an abstract quantity such as opinions or beliefs. Further, assuming coupled linear inter-agent dynamics in which the local agent states evolve as weighted linear combinations of the neighboring agents' states, we focus on tracking network-wide agent dynamics.

Due to the large-scale nature of the problem, directly monitoring data streams of the state dynamics for every individual agent is infeasible. To address this issue, we propose a method that identifies a relatively small subset of agents whose state streams enable us to reconstruct the dynamic state evolution of all the network agents at any given time and, simultaneously, detect agent departure events. Using structural properties of the coupled inter-agent dynamics, we provide an algorithm, which is polynomial in the number of agents, to identify a small subset of agents that ensures such network observability regardless of any agent leaving. In addition, we show how well-known tools in dynamic control systems may be useful for identifying abnormal events; in particular, we use a fault detection and isolation scheme to identify agent departures. Finally, we illustrate our method and algorithms in a small test network as a proof of concept.

**Keywords:**  
anomaly detection, large-scale dynamic networks, agent-state
tracking, structural systems, structural observability, fault
detection and identification (FDI)


###3.Localizing anomalous changes in time-evolving graphs
 (Proceeding
SIGMOD '14 Proceedings of the 2014 ACM SIGMOD international conference on Management of data)

**Abstract:**  
Given a time-evolving sequence of undirected, weighted graphs, we address the problem of localizing anomalous changes in graph structure over time. In this paper, we use the term `localization' to refer to the problem of identifying abnormal changes in node relationships (edges) that cause anomalous changes in graph structure. While there already exist several methods that can detect whether a graph transition is anomalous or not, these methods are not well suited for localizing the edges which are responsible for a transition being marked as an anomaly. This is a limitation in applications such as insider threat detection, where identifying the anomalous graph transitions is not sufficient, but rather, identifying the anomalous node relationships and associated nodes is key. To this end, we propose a novel, fast method based on commute time distance called CAD (Commute-time based Anomaly detection in Dynamic graphs) that detects node relationships responsible for abnormal changes in graph structure. In particular, CAD localizes anomalous edges by tracking a measure that combines information regarding changes in graph structure (in terms of commute time distance) as well as changes in edge weights. For large, sparse graphs, CAD returns a list of these anomalous edges and associated nodes in O(n\log n) time per graph instance in the sequence, where $n$ is the number of nodes. We analyze the performance of CAD on several synthetic and real-world data sets such as the Enron email network, the DBLP co-authorship network and a worldwide precipitation network data. Based on experiments conducted, we conclude that CAD consistently and efficiently identifies anomalous changes in relationships between nodes over time.

**Keywords:**  
graph analysis, temporal graphs, anomaly localization, anomaly
detection, commute time distance, random walks


###4.SONDY: an open source platform for social dynamics mining and analysis
( Proceeding
SIGMOD '13 Proceedings of the 2013 ACM SIGMOD International Conference on Management of Data)

**Abstract:**  
This paper describes SONDY, a tool for analysis of trends and dynamics in online social network data. SONDY addresses two audiences: (i) end-users who want to explore social activity and (ii) researchers who want to experiment and compare mining techniques on social data. SONDY helps end-users like media analysts or journalists understand social network users interests and activity by providing emerging topics and events detection as well as network analysis functionalities. To this end, the application proposes visualizations such as interactive time-lines that summarize information and colored user graphs that reflect the structure of the network. SONDY also provides researchers an easy way to compare and evaluate recent techniques to mine social data, implement new algorithms and extend the application without being concerned with how to make it accessible. In the demo, participants will be invited to explore information from several datasets of various sizes and origins (such as a dataset consisting of 7,874,772 messages published by 1,697,759 Twitter users during a period of 7 days) and apply the different functionalities of the platform in real-time.

**Keywords:**  
Online social networks, topic detection, network analysis

###5.PET: A Statistical Model for Popular Events Tracking in Social Communities
(Proceeding
KDD '10 Proceedings of the 16th ACM SIGKDD international conference on Knowledge discovery and data mining
)

**Abstract:**  
User generated information in online communities has been characterized with the mixture of a text stream and a network structure
both changing over time. A good example is a web-blogging community with the daily blog posts and a social network of bloggers.
An important task of analyzing an online community is to observe and track the popular events, or topics that evolve over time
in the community. Existing approaches usually focus on either the
burstiness of topics or the evolution of networks, but ignoring the
interplay between textual topics and network structures.
In this paper, we formally define the problem of popular event
tracking (PET) in online communities, focusing on the interplay
between texts and networks. We propose a novel statistical method
that models the popularity of events over time, taking into consideration the burstiness of user interest, information diffusion on the
network structure, and the evolution of textual topics. Specifically,
a Gibbs Random Field is defined to model the influence of historical status and the dependency relationships in the graph; thereafter
a topic model generates the words in text content of the event, regularized by the Gibbs Random Field. We prove that two classic models in information diffusion and text burstiness are special cases of
our model under certain situations. Empirical experiments with two different communities and datasets (i.e., Twitter and DBLP)
show that our approach is effective and outperforms existing approaches.

**Keywords:**  
PET, popular events tracking, social communities, topic modeling

###6.LabelRankT: incremental community detection in dynamic networks via label propagation
( Proceeding
DyNetMM '13 Proceedings of the Workshop on Dynamic Networks Management and Mining)

**Abstract:**  
An increasingly important challenge in network analysis is
efficient detection and tracking of communities in dynamic
networks for which changes arrive as a stream. There is
a need for algorithms that can incrementally update and
monitor communities whose evolution generates huge realtime data streams, such as the Internet or on-line social
networks. In this paper, we propose LabelRankT, an online distributed algorithm for detection of communities in
large-scale dynamic networks through stabilized label propagation. Results of tests on real-world networks demonstrate
that LabelRankT has much lower computational costs than
other algorithms. It also improves the quality of the detected
communities compared to dynamic detection methods and
matches the quality achieved by static detection approaches.
Unlike most of other algorithms which apply only to binary
networks, LabelRankT works on weighted and directed networks, which provides a flexible and promising solution for
real-world applications.

**Keywords:**  
social network, community detection, clustering, network
evolution, dynamic network, temporal

###7.The semantic evolution of online communities
(Proceeding
WWW Companion '14 Proceedings of the companion publication of the 23rd international conference on World wide web companion
Pages 433-438 )

**Abstract:**  
Despite their semantic-rich nature, online communities have, to date, largely been analysed through examining longitudinal changes in social networks, community uptake, or simple term-usage and language adoption. As a result, the evolution of communities on a semantic level, i.e. how concepts emerge, and how these concepts relate to previously discussed concepts, has largely been ignored. In this paper we present a graph-based exploration of the semantic evolution of online communities, thereby capturing dynamics of online communities on a conceptual level. We first examine how semantic graphs (concept graphs and entity graphs) of communities evolve, and then characterise such evolution using logistic population growth models. We demonstrate the value of such models by analysing how sample communities evolve and use our results to predict churn rates in community forums.


###8.Link prediction based on generalized cluster information
(Proceeding
WWW Companion '14 Proceedings of the companion publication of the 23rd international conference on World wide web companion
Pages 317-318 )

**Abstract:**  
Understanding of which new interactions among data objects are likely to occur in the future is crucial for a deeper understanding of network dynamics and evolution. This question is largely unexplored except a local neighborhood perspective, partly owing to the difficulty in finding major factors which heavily affect the link prediction problem. In this paper, we propose LPCSP, a novel link prediction method which exploits the generalized cluster information containing cluster relations and cluster evolution information. Experiments show that our proposed LPCSP is accurate, scalable, and useful for link prediction on real world graphs.

**Keywords:**  
Link Prediction, Cluster Relation, Cluster Evolution

###9.Modeling/predicting the evolution trend of osn-based applications
(Proceeding
WWW '13 Proceedings of the 22nd international conference on World Wide Web
Pages 771-780 )

**Abstract:**  
While various models have been proposed for generating social/friendship network graphs, the dynamics of user interactions through online social network (OSN) based applications remain largely unexplored. We previously developed
a growth model to capture static weekly snapshots of user
activity graphs (UAGs) using data from popular Facebook
gifting applications. This paper presents a new continuous
graph evolution model aimed to capture microscopic userlevel behaviors that govern the growth of the UAG and collectively define the overall graph structure. We demonstrate
the utility of our model by applying it to forecast the number of active users over time as the application transitions
from initial growth to peak/mature and decline/fatique phase.
Using empirical evaluations, we show that our model can accurately reproduce the evolution trend of active user population for gifting applications, or other OSN applications that
employ similar growth mechanisms. We also demonstrate
that the predictions from our model can guide the generation of synthetic graphs that accurately represent empirical
UAG snapshots sampled at different evolution stages.

**Keywords:**  
Online Social Networks, Social Games, Social Gifting, Facebook, Applications, Algorithms

###10.Predicting Group Stability in Online Social Networks
(Proceeding
WWW '13 Proceedings of the 22nd international conference on World Wide Web
Pages 1021-1030)

**Abstract:**  
Social groups often exhibit a high degree of dynamism. Some
groups thrive, while many others die over time. Modeling group
stability dynamics andunderstanding whether/when a group will
remain stable or shrink over time can be important in a number of
social domains. In this paper, we study two different types of social
networks as exemplar platforms for modeling and predicting group
stability dynamics. We build models to predict if a group is going
to remain stable or is likely to shrink over a period of time. We
observe that both the level of member diversity and social activities
are critical in maintaining thestability of groups. We also find that
certain ‘prolific’ members play a more important role in maintaining the group stability. Our study shows that group stability can
be predicted with high accuracy, and feature diversity is critical to
prediction performance.

**Keywords:**  
Social Networks, Group Stability, Online Communities