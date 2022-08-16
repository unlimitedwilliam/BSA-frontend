const data = {
    summary: [
        {
            title: 'Sales',
            subtitle: 'Total sales today',
            value: '$1000',
            percent: 60
        },
        {
            title: 'Orders',
            subtitle: 'Total orders today',
            value: '100 orders',
            percent: 40
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '$789',
            percent: 50
        },
        {
            title: 'Visits',
            subtitle: 'Total website visits today',
            value: '324 visits',
            percent: 54
        }
    ],
    overall: [
        {
            title: 'Orders',
            value: '100k',
        },
        {
            title: 'Customer',
            value: '50k',
        },
        {
            title: 'Products',
            value: 5, 
        },
        {
            title: 'Revenue',
            value: '1234k',
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data;