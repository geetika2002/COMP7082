// Importing the resources data from an external file
import resources from '../assests/data/dataResources'

const ResourceGrid = () => {
    return (
      // The main container for the resource grid
      <div className="resource-grid">
        {/* Mapping through each resource in the resources array /}
        {resources.map((resource) => (
          // Individual resource card, using the resource id as the key
          <div key={resource.id} className="resource">
            {/ Resource image /}
            <img src={resource.image} alt={resource.title} className="resource-image" />

            {/ Content inside the resource card /}
            <div className="resource-content">
              {/ Displaying the topic of the resource /}
              <span className="resource-topic">{resource.topic}</span>

              {/ Displaying the title of the resource /}
              <h3 className="resource-title">{resource.title}</h3>

              {/ Displaying the description of the resource /}
              <p className="resource-description">{resource.description}</p>

              {/ Link to learn more about the resource */}
              <a href={resource.link} className="resource-link" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    );
};

// Exporting the ResourceGrid component for use in other parts of the application
export default ResourceGrid;
