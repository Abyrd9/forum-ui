import React from "react";
import PropTypes from "prop-types";
import { ConfigureSpacingStyled } from "./ConfigureSpacing.styles";
import { ACTION_TYPES } from "../../assets/StoreProvider";
import Row from "../../library/components/ForumGrid/Row";
import Column from "../../library/components/ForumGrid/Column";
import Divider from "../Divider";
import ConfigValueConfigureBlock from "../ConfigValueConfigureBlock";
import SpacingColumn from "../SpacingColumn/SpacingColumn";
import SpacingExampleCard from "../SpacingExampleCard";
import { getSizingVariations } from "../../helpers/buildTheme";
import GenericTitleWrapper from "../GenericTitleWrapper";

const ConfigureSpacing = ({ spacing }) => {
  return (
    <ConfigureSpacingStyled>
      <Row fillGrid>
        <Column autoGutter>
          <GenericTitleWrapper title="Variable Spacing Sizing">
            <ConfigValueConfigureBlock
              actionType={ACTION_TYPES.UPDATE_SPACING}
              baseSize={spacing.baseSize || 16}
              upperRatio={spacing.upperRatio || 1}
              lowerRatio={spacing.lowerRatio || 1}
            />
          </GenericTitleWrapper>
        </Column>
      </Row>
      <Divider spacing={500} />
      <Row fillGrid>
        <Column smDownOrder={2} mdUpShrink autoGutter>
          <SpacingColumn
            baseSize={spacing.baseSize || 16}
            upperRatio={spacing.upperRatio || 1}
            lowerRatio={spacing.lowerRatio || 1}
          />
        </Column>
        <Column smDownOrder={1} smDown={12} autoGutter>
          <SpacingExampleCard
            spacing={getSizingVariations(spacing.baseSize, {
              upper: spacing.upperRatio,
              lower: spacing.lowerRatio
            })}
          />
        </Column>
      </Row>
    </ConfigureSpacingStyled>
  );
};

ConfigureSpacing.defaultProps = {
  spacing: {}
};

ConfigureSpacing.propTypes = {
  spacing: PropTypes.shape({
    baseSize: PropTypes.number,
    upperRatio: PropTypes.number,
    lowerRatio: PropTypes.number
  })
};

export default ConfigureSpacing;
