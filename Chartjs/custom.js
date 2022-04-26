var ctx=document.getElementById('myChart').getContext('2d');
var myChart=new Chart(ctx,{
	type:'pie',
	data:{
		labels:['Morning',"Lunch","Noon","afternoon","Evening","Night"],
		datasets:[{
			label:'Online Sell',
			data:[9,13,8,15,7,19],
			backgroundColor:[
			'rgba(0,0,255,1)',
			'rgba(54,162,235,0.7)',
			'rgba(255,206,86,0.8)',
			'rgba(153,102,255,1)',
			'rgba(0,0,255,0.6)'
			],
			borderColor:[
			'rgba(0,0,255,1)',
			'rgba(54,162,235,0.7)',
			'rgba(255,206,86,0.8)',
			'rgba(153,102,255,1)',
			'rgba(0,0,255,0.6)'
			],
		borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});