const { graphql } = require("gatsby");
const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// start turn pizza into pages
  async function turnPizzaIntoPages ({ graphql, actions }) {

  const pizzaTemplate = path.resolve(`./src/templates/Pizza.js`);

  const { data } = await graphql(`
    query {
        pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);
  
data.pizzas.nodes.forEach((pizza) => {
    console.log('creating a page for ', pizza.name)

    actions.createPage({
        //what is the url for each new page
        path: `pizza/${pizza.slug.current}`,
        // which page component is the data being loaded into
        component: pizzaTemplate,
        context: {
            slug: pizza.slug.current,

        }

    })

});
};
//end turn pizzas into pages

// startturn toppings into pages

async function turnToppingsIntoPages({graphql, actions}) {
    console.log("turning the toppings into pages");
    
    const toppingTemplate = path.resolve(`./src/pages/pizzasPage.js`);

    const { data } = await graphql(`

     
    query {
        toppings: allSanityTopping {
          nodes {
            name
            id
          }
        }
      }
      

    `); 
    console.log({data});

    data.toppings.nodes.forEach((topping) =>  {
        console.log('creating page for topping', topping.name);

        actions.createPage({
            path: `topping/${topping.name}`,
            component: toppingTemplate,
            context:{
                topping: topping.name, 
            }
        });
    });
}

//// =========================================
//// end pizzza stuff 
/////////======================================


//// =========================================
//// Start Jobs into pages 
/////////======================================

// start turnjobs pages
async function turnJobIntoPages ({ graphql, actions }) {

  const jobTemplate = path.resolve(`./src/templates/Job.js`);

  const { data } = await graphql(`
    query {
      jobs: allSanityJobrole {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);
  
data.jobs.nodes.forEach((job) => {
    console.log('creating a page for ', job.name)

    actions.createPage({
        //what is the url for each new page
        path: `job/${job.slug.current}`,
        // which page component is the data being loaded into
        component: jobTemplate,
        context: {
            slug: job.slug.current,

        },

    });

});
}; 

//// =========================================
//// end Jobs into pages 
/////////======================================

 
//// =========================================
//// turn jobyears into pages
/////////======================================
async function turnJobYearsIntoPages({graphql, actions}) {
  console.log("turning the jobyears into pages");
  
  const yearsTemplate = path.resolve(`./src/pages/index.js`);

  const { data } = await graphql(`

   
  query {
    years: allSanityJobyear {
      nodes {
          name
          id
        }
    }
    }
    

  `); 
  console.log({data});

  data.years.nodes.forEach((year) =>  {
      console.log('creating page for year based on name', year.name);

      actions.createPage({
          path: `year/${year.name}`,
          component: yearsTemplate,
          context:{
              year: year.name, 
          }
      });
  });
}


//// =========================================
// end turn jobyears into pages  
/////////======================================


//// =========================================
//// Start Job Location pages 
/////////======================================
 
async function turnJobLocationIntoPages ({ graphql, actions }) {
  console.log("turning the joblocation into pages");
  const locationTemplate = path.resolve(`./src/pages/index.js`);

  const { data } = await graphql(`
    query {
      joblocales: allSanityJoblocation {
        nodes {
          id
          name
        }
      }
    }
  `);
  console.log(data);
  
data.joblocales.nodes.forEach((location) => {
    console.log('creating a page for locations ', location.name)

    actions.createPage({
        //what is the url for each new page
        path: `location/${location.name}`,
        // which page component is the data being loaded into
        component: locationTemplate,
        context: {
          location: location.name,

        }

    })

});
};   

//// =========================================
//// end   Job location pages 
/////////======================================


exports.createPages = async (params) => {
  
    // wait for all promises to be resolved before finishing this function
    await Promise.all([
        turnPizzaIntoPages(params),
        turnToppingsIntoPages(params),


        turnJobIntoPages(params),
        turnJobYearsIntoPages(params),
        turnJobLocationIntoPages(params)

    ]);  

  console.log("created all pages and finishing up brooo");
 
};
