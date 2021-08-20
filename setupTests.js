import '@testing-library/jest-dom/extend-expect'
import 'regenerator-runtime/runtime'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })
