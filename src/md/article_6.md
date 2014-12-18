##graph stream sampl 测试记录

###替换算法1：随机替换

``` c
 //随机删除已抽样的点，但不能删除正在添加的边中包含的点，否则造成VS和ES不匹配
void DelVertex(map<int,int> & VS,multimap<int,int> & ES,int forbid)  
{
	map<int,int>::iterator it,rm;
	int rm_id,i,rm_vertex;
	it = VS.begin();
	rm = VS.begin();
	rm_id = rand()%VS.size();
	for (i=0;it != VS.end();it++,i++){  //随机删除一个现有点和相关的边
		if (i == rm_id){
			rm_vertex = it->first;
			if (rm_vertex == forbid){   //不能删除这个点，再随机一次
				cout<<"!!!!!!!!!!!!!!!!1can not delete forbiden vertex : "<<forbid<<endl;
				DelVertex(VS,ES,forbid);
			}
			else{
				//cout<<"remove vertex:"<<rm_vertex<<endl;
				UpdateDegreeMap(it->second,-1);
				VS.erase(it);
				DelEdge(ES,VS,rm_vertex);  //删除与删除点相关的边
			}
			break;
		}
	}
}
```


###替换算法2：替换度最小的点

```c
void DelVertexMin(map<int,int> & VS,multimap<int,int> & ES,int forbid)
{
	map<int,int>::iterator it;
	int rm_id,i,rm_vertex;
	it = VS.begin();
	//rm = VS.begin();
	bool rm = false;
	int min_degree = 1;
	while(true){
		rm = false;
		for (;it != VS.end();it++){
			if (it->second == min_degree && it->first != forbid){   //删除度最小的点
				rm = true;
				rm_vertex = it->first;
				//cout<<"remove vertex:"<<rm_vertex<<" degree:"<<it->second<<endl;

				UpdateDegreeMap(it->second,-1);

				VS.erase(it);
				DelEdge(ES,VS,rm_vertex);  //删除与删除点相关的边
				break;
			}
		}
		if (rm){
			break;
		}
		min_degree++;
	}
}
```

###替换算法3：以度的倒数为比例的概率替换点  p(d) = n / d;n为常数，d为度，p(d)为度为d的点被替换概率

``` c
void DelVertexLine(map<int,int> & VS,multimap<int,int> & ES,int forbid)
{
	double pi;           //计算每个度对应的替换概率
	int d_max = degreeMap.rbegin()->first + 1;  //最大度数加1
	long sum = 0;
	int rm_vertex;
	float random_value = 0;  //随机值
	float add_value = 0;    //累加值，当累加值大于随机值时替换掉当前点
	map<int,pair<int,float>>::iterator it;
	map<int,int>::iterator it_vs;

	for (it = degreeMap.begin();it != degreeMap.end();it++){ //求和sum
		//sum += (d_max - it->first) * it->second.first;
		sum += ((float)1.0 / it->first) * it->second.first;
	}

	for (it = degreeMap.begin();it != degreeMap.end();it++){  //计算每个度对应的概率
		//it->second.second = SAMPLE_SIZE * (float)(d_max - it->first) / sum;
		it->second.second = SAMPLE_SIZE * ((float)1.0 / it->first) / sum;
	}

	random_value = rand() % (SAMPLE_SIZE + 1);

	for (it_vs = VS.begin();it_vs != VS.end();it_vs++){ 
		add_value += degreeMap.find(it_vs->second)->second.second;
		if (add_value >= random_value){
			if (it_vs->first == forbid){ //不能删除的点，再来一次
				DelVertexLine(VS,ES,forbid);
			}
			else{
				//PrintDS();
				//cout<<"remove vertex:"<<it_vs->first<<" degree:"<<it_vs->second<<endl;
				
				rm_vertex = it_vs->first;
				UpdateDegreeMap(it_vs->second,-1);
				VS.erase(it_vs);
				DelEdge(ES,VS,rm_vertex);  //删除与删除点相关的边
				break;
			}
		}
	}

//	PrintDS();

}
```

###测试数据集：Email-Enron.txt 测试对象：度分布系数DIS

<table>
	<tr>
		<th rowspan="2">抽样方法</th>
		<th colspan="4">抽样比例</th>
	</tr>

	<tr>
		<th>5%</th>
		<th>10%</th>
		<th>20%</th>
		<th>30%</th>
	</tr>

	<tr>
		<td>原图DIS</td>
		<td>2.09</td>
		<td>2.09</td>
		<td>2.09</td>
		<td>2.09</td>
	</tr>

	<tr>
		<td>普通边抽样，随机替换</td>
		
		<td>11.50</td>
		<td>7.52</td>
		<td>5.33</td>
		<td>4.16</td>
	</tr>

	<tr>
		<td>PIE,随机替换</td>
		
		<td>3.77</td>
		<td>3.30</td>
		<td>2.93</td>
		<td>2.77</td>
	</tr>
	<tr>
		<td>PIE,替换度最小点</td>
		
		<td>1.73</td>
		<td>1.63</td>
		<td>1.62</td>
		<td>1.65</td>
	</tr>
	<tr>
		<td>PIE,p(d) = λ(dmax - d)</td>
		
		<td>3.55</td>
		<td>3.23</td>
		<td>2.89</td>
		<td>2.74</td>
	</tr>
	<tr>
		<td>PIE,p(d) = λ*pow(d,-2)</td>
		
		<td>1.47</td>
		<td>1.51</td>
		<td>1.63</td>
		<td>1.40</td>
	</tr>
	<tr>
		<td>PIE,p(d) = λ/d</td>
		<td>2.04</td>
		<td>1.96</td>
		<td>1.93</td>
		<td>1.94</td>
	</tr>
 

</table>
