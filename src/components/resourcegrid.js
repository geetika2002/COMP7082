import resources from '../assests/sampleResources'

const ResourceGrid = () => {
    return (
      <div className="resource-grid">
        {resources.map((resource) => (
          <div key={resource.id} className="resource">
            <img src={resource.image} alt={resource.title} className="resource-image" />
            <div className="resource-content">
              <span className="resource-topic">{resource.topic}</span>
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
              <a href={resource.link} className="resource-link" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ResourceGrid;