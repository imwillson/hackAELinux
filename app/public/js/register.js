var data = {
            resource_id: '38625c3d-5388-4c16-a30f-d105432553a4', // the resource id
            limit: 5, // get 5 results
            q: 'jones' // query for 'jones'
        };
        $.ajax({
            url: 'https://inventory.data.gov/api/action/datastore_search',
            data: data,
            dataType: 'json',
            crossDomain: true,
            success: function() {
            console.log('Total results found: ' + data.result.total)
            }
        });